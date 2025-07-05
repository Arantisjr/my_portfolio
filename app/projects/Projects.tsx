import My_project from "../components/My_project";
import { project_data } from "../data/projectData";
import { FaGithub } from "react-icons/fa";
import '../styles/Projects.css';
import Link from 'next/link';
const Projects = () => {
  return (
    <div className="proj_main_div">
        {
            project_data.map((p) => <My_project {...p} key={p.id} />)
        }
        <Link href='https://github.com/Arantisjr'>
        <div className="more_proj">
            <p className="flex items-center gap-2 font-bold">View more on <FaGithub /> </p>

        </div>
        </Link>
      
    </div>
  )
}

export default Projects
