import Writting_nav from "../components/Writting_nav";
import GetWrittings from "../components/GetWrittings";

export default function Home() {
  return (
   <>
   <Writting_nav link_nav={'Writtings'} description_nav={`
    I occasionally share my thoughts on life, coding tricks, and whatever's on my mind. Come along for the ride and subscribe to keep up!
    `} />

    <GetWrittings />

    </>
  )
}
