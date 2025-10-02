import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/writings - Get all writings
export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams
    const published = searchParams.get('published')
    
    // Build filter
    const where = published === 'true' 
      ? { published: true } 
      : published === 'false' 
      ? { published: false } 
      : {}
    
    // Fetch writings from database
    const writings = await prisma.writing.findMany({
      where,
      orderBy: {
        createdAt: 'desc' // Newest first
      }
    })
    
    return NextResponse.json(writings, { status: 200 })
  } catch (error) {
    console.error('Error fetching writings:', error)
    return NextResponse.json(
      { error: 'Failed to fetch writings' },
      { status: 500 }
    )
  }
}

// POST /api/writings - Create new writing
export async function POST(request: NextRequest) {
  try {
    // Get data from request body
    const body = await request.json()
    const { title, content, excerpt, slug, published } = body
    
    // Validate required fields
    if (!title || !content || !slug) {
      return NextResponse.json(
        { error: 'Title, content, and slug are required' },
        { status: 400 }
      )
    }
    
    // Create writing in database
    const writing = await prisma.writing.create({
      data: {
        title,
        content,
        excerpt: excerpt || null,
        slug,
        published: published || false
      }
    })
    
    return NextResponse.json(writing, { status: 201 })
  } catch (error) {
    console.error('Error creating writing:', error)
    
    // Handle unique constraint error (duplicate slug)
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
      return NextResponse.json(
        { error: 'A writing with this slug already exists' },
        { status: 409 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to create writing' },
      { status: 500 }
    )
  }
}