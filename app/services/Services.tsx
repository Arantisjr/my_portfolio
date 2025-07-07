import {my_services} from '../data/servicesdata.js';
import My_services from '../components/My_services';
import ContactForm from '../components/ContactForm';
const Services = () => {
  return (
    <>
    
    <div className='flex flex-col gap-[2rem] mb-[9rem] mt-[5rem] p-[1rem]'>
      {
        my_services.map((s) => <My_services {...s} key={s.id} />)
      }
      {/* // Here, we're passing each service and description as props to the My_services component */}
    </div>
    <ContactForm />

    
    </>
  )
}

export default Services
