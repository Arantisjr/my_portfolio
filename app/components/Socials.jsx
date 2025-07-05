import Link from 'next/link';
import '../styles/Socials.css';
const Socials = ({social_icon, social_name, go_to}) => {
  return (
    <>
    <Link href={go_to}>
    
    <div className="social_main_container">
       {social_icon} {social_name}
    </div>
    </Link>
    </>
  )
}

export default Socials
