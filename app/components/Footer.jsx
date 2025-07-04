import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiPeerlist } from "react-icons/si";
import '../styles/Footer.css';
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <div className="footer_main_container">
        <p>&copy; {year}</p>

        <div className="footer_links">
          <ul>
            <Link href="https://github.com/Arantisjr">
              <li>
                <FaGithub />
              </li>
            </Link>
            <Link href="https://www.linkedin.com/in/arantis">
              <li>
                <FaLinkedin />{" "}
              </li>
            </Link>
            <Link href={"https://x.com/Arantis_jr"}>
              <li>
                <FaTwitter />
              </li>
            </Link>
            <Link href={"https://peerlist.io/arant_tech"}>
              <li>
                <SiPeerlist />{" "}
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
