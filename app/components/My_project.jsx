import Image from 'next/image';
import c_flicks from '../../public/c.png';
import '../styles/My_project.css';
import Link from 'next/link';
const My_project = ({proj_link,proj_logo,proj_name, description}) => {
  return (
    <>
    <Link href={proj_link}>
    
    <div className="my_project">
        <div className="my_project_up_div">
            <div className="project_icon_div">
                <Image  src={proj_logo} alt={`Cflicks logo`} width={30} height={30} />
            </div>
        </div>
        <div className="project_text">
            <p className='text-xl font-bold text-[var(--bold-text)]'> {proj_name}</p>

           <p>
            {description}
            </p> 
     
        </div>
    </div>
    </Link>
    </>
  )
}

export default My_project
