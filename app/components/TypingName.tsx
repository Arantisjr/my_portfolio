'use client';
import { useEffect, useState } from 'react';

export function TypingName({ 
  name = "Hi, I'm Arantis",
  typingSpeed = 150,  // Slower typing (higher = slower)
  deletingSpeed = 100, // Slower deleting (higher = slower)
  pauseDuration = 2000 // Longer pause before deleting
}: {
  name: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}) {
  const [displayedName, setDisplayedName] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Cursor blink animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typing animation
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const typeWriter = () => {
      const isComplete = index === name.length;
      const isEmpty = displayedName.length === 0;

      if (!isDeleting && !isComplete) {
        // Typing forward
        setDisplayedName(name.substring(0, index + 1));
        setIndex(i => i + 1);
        timer = setTimeout(typeWriter, typingSpeed);
      } 
      else if (isComplete && !isDeleting) {
        // Pause at full text
        timer = setTimeout(() => setIsDeleting(true), pauseDuration);
      }
      else if (isDeleting && !isEmpty) {
        // Deleting backward
        setDisplayedName(name.substring(0, displayedName.length - 1));
        timer = setTimeout(typeWriter, deletingSpeed);
      }
      else if (isDeleting && isEmpty) {
        // Reset after deleting
        setIsDeleting(false);
        setIndex(0);
        timer = setTimeout(typeWriter, 500); // Short pause before retyping
      }
    };

    timer = setTimeout(typeWriter, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedName, index, isDeleting, name, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="typing-container">
      {displayedName}
      <span className={`typing-cursor ${showCursor ? 'visible' : 'invisible'}`}>|</span>
    </span>
  );
}