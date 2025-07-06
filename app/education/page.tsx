import Writting_nav from "../components/Writting_nav";
import Education from '../components/Education';
import { educationData } from "../data/education";

export default function Home() {
  return (
   <>
   <Writting_nav link_nav={'Education'} description_nav={"Here is my Software Engineering Journey. "} />
   <div className="mt-[6rem] mb-[6rem]">
   {
educationData.map((e) => <Education {...e} key={e.id} />)
   }

   </div>
    </>
  );
}