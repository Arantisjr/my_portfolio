'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BsArrowLeftShort } from "react-icons/bs";

export default function WritingPage({ params }) {
    const [writing, setWriting] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWriting = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/writings/${params.slug}`);
                if (!response.ok) {
                    throw new Error('Writing not found');
                }
                const data = await response.json();
                setWriting(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchWriting();
    }, [params.slug]);

    if (loading) return <div className="p-4">Loading...</div>;
    if (error) return <div className="p-4 text-red-500">Error: {error}</div>;
    if (!writing) return <div className="p-4">Writing not found</div>;

    return (
        <div className="max-w-3xl mx-auto p-4 my-[8rem]">
            <Link href="/writings" className=" mb-[6rem] flex gap-4 items-center cursor-pointer text-xl font-bold  ">
                <BsArrowLeftShort /> Writtings
            </Link>
            
            <h1 className="text-3xl font-bold mb-2">{writing.title}</h1>
            {writing.subtitle && <h2 className="text-xl text-gray-600 mb-4">{writing.subtitle}</h2>}
            
            <div className="flex gap-4 text-sm text-gray-500 mb-6">
                <span>By {writing.author}</span>
                <span>{new Date(writing.created_at).toLocaleDateString()}</span>
                <span>{writing.reading_time} min read</span>
            </div>
            
            <div 
                className="prose max-w-none md:text-xl lg:text-xl" 
                dangerouslySetInnerHTML={{ __html: writing.content }} 
            />
        </div>
    );
}