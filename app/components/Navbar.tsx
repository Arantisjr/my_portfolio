'use client';

import Link from 'next/link';
import '../styles/Navbar.css';
import { CiDark, CiLight } from 'react-icons/ci';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

const Navbar = () => {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Apply the correct theme to the <html> tag
  const applyTheme = (selectedTheme: Theme) => {
    setTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme);

    if (selectedTheme === 'system') {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = prefersDark ? 'dark' : 'light';
      setResolvedTheme(systemTheme);
      document.documentElement.setAttribute('data-theme', systemTheme);
    } else {
      setResolvedTheme(selectedTheme);
      document.documentElement.setAttribute('data-theme', selectedTheme);
    }
  };

  // On mount, check stored theme or system preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = storedTheme || 'system';
    applyTheme(initialTheme);

    // Listen for system theme changes (only if using system theme)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        const systemTheme = e.matches ? 'dark' : 'light';
        setResolvedTheme(systemTheme);
        document.documentElement.setAttribute('data-theme', systemTheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => {
      mediaQuery.removeEventListener('change', handleSystemChange);
    };
  }, [theme]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <div className="nav_main_container">
      <div className="nav_logo">&#123;A_T&#125;</div>
      <div className="nav_links">
        <ul>
          <Link href="/writings"><li>Writings</li></Link>
          <Link href="/projects"><li>Projects</li></Link>
          <Link href="/education"><li>Education</li></Link>
          <Link href="/links"><li>Links</li></Link>
          <Link href="/services"><li>Services</li></Link>
        </ul>
      </div>

      <div className="theme-container">
        <div className="theme-icon" onClick={toggleDropdown}>
          {resolvedTheme === 'dark' ? <CiDark size={24} /> : <CiLight size={24} />}
        </div>
        {dropdownOpen && (
          <div className="theme-dropdown">
            <div className="theme-option" onClick={() => applyTheme('light')}>
              {theme === 'light' &&  <span>✓ </span>}Light
            </div>
            <div className="theme-option" onClick={() => applyTheme('dark')}>
              {theme === 'dark' && <span>✓ </span>}Dark
            </div>
            <div className="theme-option" onClick={() => applyTheme('system')}>
              {theme === 'system' && <span>✓ </span>}System
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
