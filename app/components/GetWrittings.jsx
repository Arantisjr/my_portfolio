'use client';
import Link from 'next/link';
import '../styles/GetWrittings.css'
import { useState, useEffect } from "react"

const GetWrittings = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch from your new Next.js API
    fetch("/api/writings?published=true")
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch writings');
        }
        return res.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("error fetching blogs", err);
        setError(err.message);
        setLoading(false);
      })
  }, [])

  if (loading) {
    return (
      <div className="g_main_container">
        <p>Loading writings...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="g_main_container">
        <p>Error loading writings: {error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="g_main_container">
        {blogs.length === 0 ? (
          <p>No writings published yet.</p>
        ) : (
          blogs.map((w) => (
            <Link href={`/writings/${w.slug}`} key={w.id} className="talks">
              <div className='talk'>
                <p className='font-bold'>{w.title}</p>
                {w.excerpt && <p className="excerpt">{w.excerpt}</p>}
                <hr />
                <div className="date_min">
                  <p>{new Date(w.createdAt).toLocaleDateString()}</p>
                  {/* Reading time calculation - optional */}
                  <p>{Math.ceil(w.content.split(' ').length / 200)} min read</p>
                </div>
              </div>
            </Link>
          ))
        )}
      </div>
    </>
  )
}

export default GetWrittings