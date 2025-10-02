import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

// GET /api/writings/[id] - Get single writing
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    
    const writing = await prisma.writing.findUnique({
      where: { id }
    })
    
    if (!writing) {
      return NextResponse.json(
        { error: 'Writing not found' },
        { status: 404 }
      )
    }
    
    return NextResponse.json(writing, { status: 200 })
  } catch (error) {
    console.error('Error fetching writing:', error)
    return NextResponse.json(
      { error: 'Failed to fetch writing' },
      { status: 500 }
    )
  }
}

// PUT /api/writings/[id] - Update writing
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const body = await request.json()
    const { title, content, excerpt, slug, published } = body
    
    // Check if writing exists
    const existingWriting = await prisma.writing.findUnique({
      where: { id }
    })
    
    if (!existingWriting) {
      return NextResponse.json(
        { error: 'Writing not found' },
        { status: 404 }
      )
    }
    
    // Update writing
    const writing = await prisma.writing.update({
      where: { id },
      data: {
        ...(title && { title }),
        ...(content && { content }),
        ...(excerpt !== undefined && { excerpt }),
        ...(slug && { slug }),
        ...(published !== undefined && { published })
      }
    })
    
    return NextResponse.json(writing, { status: 200 })
  } catch (error) {
    console.error('Error updating writing:', error)
    
    // Handle unique constraint error
    if (error && typeof error === 'object' && 'code' in error && error.code === 'P2002') {
      return NextResponse.json(
        { error: 'A writing with this slug already exists' },
        { status: 409 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to update writing' },
      { status: 500 }
    )
  }
}

// DELETE /api/writings/[id] - Delete writing
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    
    // Check if writing exists
    const existingWriting = await prisma.writing.findUnique({
      where: { id }
    })
    
    if (!existingWriting) {
      return NextResponse.json(
        { error: 'Writing not found' },
        { status: 404 }
      )
    }
    
    // Delete writing
    await prisma.writing.delete({
      where: { id }
    })
    
    return NextResponse.json(
      { message: 'Writing deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error deleting writing:', error)
    return NextResponse.json(
      { error: 'Failed to delete writing' },
      { status: 500 }
    )
  }
}