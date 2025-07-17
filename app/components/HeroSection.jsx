import { TypingName } from "./TypingName";
import Link from "next/link";
import Image from "next/image";
import '../styles/HeroSection.css';
import profileImage from '../../public/AJ.png';

const HeroSection = () => {
  // Replace this with your actual Google Drive shareable link
  const cvDownloadLink = "https://drive.google.com/file/d/1f0vSvXBR6ZyJbbJ6FWg_9vuyOWH1q7au/view?usp=sharing";
  
  // Convert the view link to a direct download link
  const directDownloadLink = cvDownloadLink.replace("/file/d/", "/uc?export=download&id=")
                                         .replace("/view?usp=sharing", "");

  return (
    <div className="hero_main_container">
      <div className="profile-image-container">
        <Image 
          src={profileImage}
          alt="Arantis profile picture"
          width={150}
          height={150}
          className="profile-image"
          priority
        />
      </div>
      
      <div className="hero-content">
        <h1 className="nav_title">
          <TypingName
            name="Hi, I'm Arantis..."
            typingSpeed={80}
            deletingSpeed={60}
            pauseDuration={3000}
          />
        </h1>
        <div className="main_hero_text">
          I'm a Software engineer who builds with both pixels and performance in
          mind. When I'm not solving world problems through code, you'll find me
          brainstorming new ideas or enjoying quality time with family and
          friends. I believe technology should serve people - elegantly and
          efficiently.
        </div>
        <p className="hero_footer">
          I love to learn and explore new technologies, I'm currently on a 6month
          remote internship at{" "}
          <Link href="https://isparkinno.com/">
            <span className="text-[17px] font-bold text-[var(--bold-text)]">ispark Inno</span>
          </Link> as <i>Full-stack dev</i>
        </p>
        
        {/* Download CV Button */}
        <a 
          href={directDownloadLink}
          target="_blank"
          rel="noopener noreferrer"
          className="download-cv-button"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};

export default HeroSection;