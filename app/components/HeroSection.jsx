import { TypingName } from "./TypingName";
import Link from "next/link";
import '../styles/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero_main_container">
      <h1 className="nav_title">
        <TypingName
          name="Hi, I'm Arantis..."
          typingSpeed={80} // Even slower typing
          deletingSpeed={60} // Even slower deleting
          pauseDuration={3000} // Longer pause
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
          <span className="text-[17px] font-bold text-[var(--bold-text)] ">ispark Inno</span>
        </Link> as <i>Full-stack dev</i>
      </p>
    </div>
  );
};

export default HeroSection;
