'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsArrowLeftShort, BsClock, BsCalendar } from "react-icons/bs";

export default function WritingPage({ params }) {
  const [writing, setWriting] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWriting = async () => {
      try {
        const response = await fetch(`/api/writings?slug=${params.slug}`);
        
        if (!response.ok) {
          throw new Error('Writing not found');
        }
        
        const data = await response.json();
        const foundWriting = data.find(w => w.slug === params.slug);
        
        if (!foundWriting) {
          throw new Error('Writing not found');
        }
        
        setWriting(foundWriting);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWriting();
  }, [params.slug]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-bg-color">
      <div className="animate-pulse text-xl text-text-color">Loading your writing...</div>
    </div>
  );
  
  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-bg-color">
      <div className="text-text-color text-center">
        <div className="text-2xl mb-2">😔</div>
        <div>Error: {error}</div>
        <Link href="/writings" className="mt-4 inline-block text-bold-text hover:underline">
          Back to Writings
        </Link>
      </div>
    </div>
  );
  
  if (!writing) return (
    <div className="min-h-screen flex items-center justify-center bg-bg-color">
      <div className="text-center text-text-color">
        <div className="text-2xl mb-2">📝</div>
        <div>Writing not found</div>
      </div>
    </div>
  );

  const readingTime = Math.ceil(writing.content.split(' ').length / 200);

  return (
    <div className="min-h-screen bg-bg-color py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Back Button */}
        <Link 
          href="/writings" 
          className="inline-flex items-center gap-2 text-text-color hover:text-bold-text transition-colors mb-12 group"
        >
          <BsArrowLeftShort className="text-2xl group-hover:-translate-x-1 transition-transform" /> 
          <span className="font-medium">Back to Writings</span>
        </Link>

        {/* Header Section */}
        <div className="text-center mb-12">
          {/* Author Badge */}
          <div className="inline-block border border-border-color  text-text-color px-3 py-1 rounded-full text-sm font-medium mb-6">
            By Arantech
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-bold-text mb-6 leading-tight">
            {writing.title}
          </h1>

          {/* Excerpt */}
          {writing.excerpt && (
            <h2 className="text-xl text-text-color mb-8 max-w-2xl mx-auto leading-relaxed">
              {writing.excerpt}
            </h2>
          )}

          {/* Meta Information */}
          <div className="flex items-center justify-center gap-6 text-text-color mb-2">
            <div className="flex items-center gap-2">
              <BsCalendar className="text-sm" />
              <span>{new Date(writing.createdAt || Date.now()).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center gap-2">
              <BsClock className="text-sm" />
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className=" rounded-lg border border-border-color p-6 md:p-8">
          <article 
            className="prose prose-lg max-w-none 
                      prose-headings:text-bold-text
                      prose-p:text-text-color prose-p:leading-relaxed
                      prose-a:text-bold-text prose-a:no-underline hover:prose-a:underline
                      prose-blockquote:border-border-color prose-blockquote:bg-bg-color
                      prose-strong:text-bold-text
                      prose-code:bg-bg-color prose-code:text-text-color prose-code:px-1 prose-code:rounded
                      prose-pre:bg-bold-text prose-pre:text-white prose-pre:border-border-color"
            dangerouslySetInnerHTML={{ __html: writing.content }}
          />
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border-color">
          <div className="text-text-color mb-4">Written by Arantech</div>
          <Link 
            href="/writings" 
            className="inline-flex items-center gap-2 text-bold-text hover:text-text-color transition-colors font-medium"
          >
            <BsArrowLeftShort className="text-xl" />
            Back to all writings
          </Link>
        </div>
      </div>
    </div>
  );
}