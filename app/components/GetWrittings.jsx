'use client';
import Link from 'next/link';
import '../styles/GetWrittings.css'

import { useState, useEffect } from "react"
const GetWrittings = () => {

    const[blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/writings")
        .then((res) => res.json())
        .then((data) => {
            setBlogs(data);

        })
        .catch((err) => {
            console.error("error fetching blogs", err);

        })
    },[])
  return (
   <>
   <div className="g_main_container">
    {
        blogs.map((w) =>
            
             <Link href={`/writings/${w.slug}`} key={w.id} className="talks"  >

         <div className='talk'>
            <p className=' font-bold'>{w.title}</p>
            <hr />
            <div className="date_min">
                <p>{w.created_at}</p>
                <p>{w.reading_time} min read</p>
            </div>
        </div>
             </Link>
            
        )
    }

   </div>
   </>
  )
}

export default GetWrittings
