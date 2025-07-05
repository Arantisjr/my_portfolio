import { FaCode } from "react-icons/fa";
import '../styles/My_services.css';
const My_services = ({language, description}) => {
  return (
    <div className="m_main_container">
        <p><FaCode  size={30}/></p>
        <p className="text-3xl font-bold text-[var(--bold-text)]">{language}</p>
        <p className="text-xl text-[var(--text-color)]">{description}</p>
      
    </div>
  )
}

export default My_services
