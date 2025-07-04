import { VscPinned } from "react-icons/vsc";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import '../styles/MainSection.css';
import Link from "next/link";
import {project_data} from '../data/projectData';
import My_project from '../components/My_project'
const MainSection = () => {
  return (
  <>
  <div className="first_container">
    <div className="nav_main_section">
        <div className="nav_main_left">
            <p>Pinned work</p>
                <VscPinned />

        </div>
        <Link href= '/projects'>
        <div className="nav_main_right">
            <p>View all</p>
            <MdKeyboardDoubleArrowRight />
        </div>
        </Link>
    </div>
    <div className="main_main_section">
        {
                   project_data.map((p) => <My_project {...p} key={p.id} /> )
        }
    </div>
  </div>
  
  </>
  )
}

export default MainSection
