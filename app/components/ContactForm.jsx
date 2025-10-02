"use client"; // Required for client-side interactivity

import { useState } from 'react';
import '../styles/ContactForm.css';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    setStatus('Sending...');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: ' 32df44da-61b7-4412-88ca-28e1c0dbfd96', // Replace with your Web3Forms access key
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('Message sent successfully!');
        e.target.reset(); // Clear form
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className='text-2xl font-bold'>Contact AranTech.</h1>
      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send Message</button>
      {status && <p>{status}</p>}
    </form>
  );
}