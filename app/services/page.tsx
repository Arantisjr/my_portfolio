import Writting_nav from "../components/Writting_nav";
import Services from "./Services";

export default function Home() {
  return (
   <>
   <Writting_nav link_nav={'Services'} description_nav={`What i can offer. `} />
   <Services />

    </>
  );
}