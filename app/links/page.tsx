import Writting_nav from "../components/Writting_nav";
import My_link from "./My_link";

export default function Home() {
  return (
   <>
   <Writting_nav link_nav={'Links!'} description_nav={"Here are some of my social links."} />
   <My_link />
    </>
  );
}