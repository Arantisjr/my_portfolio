import { FaGithub, FaLinkedin, FaYoutube  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiPeerlist } from "react-icons/si";
export const my_socials = [
    {
        id: "1",
        go_to: "https://github.com/Arantisjr",
        social_icon: <FaGithub />,
        social_name: "GitHub"
    },
    {
        id: "2",
        go_to: "https://www.linkedin.com/in/arantis",
        social_icon: <FaLinkedin  />,
        social_name: "LinkedIn"
    },
    {
        id: "3",
        go_to: 'https://x.com/Arantis_jr',
        social_icon: <FaXTwitter />,
        social_name: "Twitter"
    },
    {
        id: "4",
        go_to: "https://peerlist.io/arant_tech",
        social_icon: <SiPeerlist />,
        social_name: "Peerlist"
    },
    {
        id:"5",
        go_to: 'https://youtube.com/@Arantis_Tech',
        social_icon: <FaYoutube />,
        social_name: "YouTube"
    }

]