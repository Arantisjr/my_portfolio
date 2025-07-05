import Writting_nav from "../components/Writting_nav";
import Projects from "./Projects";

export default function Home() {
  return (
   <>
   <Writting_nav link_nav={'Projects!'} description_nav={`What i have been cooking lately. `} />
   <Projects />
    </>
  );
}