import Link from 'next/link';
import '../styles/Navbar.css';
import { CiDark } from "react-icons/ci";
const Navbar = () => {
  return (
 <>
 <div className="nav_main_container">
    <div className="nav_logo">
        &lcub;A_T&rcub;
    </div>
    <div className="nav_links">
        <ul>
            <Link href='/writings'>
            <li>Writings</li>
            </Link>
            <Link href='/projects'>
            <li>Projects</li>
            </Link>
            <Link href='/education'>
            <li>Education</li>
            </Link>
            <Link href='/links'>
            <li>Links</li>
            </Link>
            <Link href='/services'>
            <li>Services</li>
            </Link>
        </ul>
    </div>
    <div className="theme">
        <CiDark size={24} />

    </div>

 </div>
 </>
  )
}

export default Navbar
