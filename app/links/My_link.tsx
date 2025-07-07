import Socials from '../components/Socials'
import {my_socials} from '../data/socials'
import '../styles/My_link.css';
import { LuMail } from "react-icons/lu";
import Link from 'next/link';
const My_link = () => {
  return (
    <div className='flex flex-col gap-6 item-center mb-[20rem] mt-[5rem] p-[1rem] '>
      <div className="link_main_container">
        {
          my_socials.map((s) => <Socials {...s} key={s.id} />)  // Here, we're passing each social icon and name as props to the Socials component
        }
        <Link href='https://cal.com/aran-tech' target='_blank'>
        <div className="call">
         <p className='text-2xl font-bold cursor-pointer'>
          
          Cal.com
          </p> 
        </div>
        </Link>

      </div>
      <Link href={'mailto:arantisjunior@gmail.com'} target='_blank'>
      
      <div className="collaborate">
        <LuMail /> Collaboration 
      </div>
      </Link>
      
    </div>
  )
}

export default My_link
