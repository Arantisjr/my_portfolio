// import Image from "next/image";
import HeroSection from '../app/components/HeroSection'
import MainSection from '../app/components/MainSection'
import Blogs from './components/Blogs';

export default function Home() {
  return (
   <>
   <HeroSection />
   <MainSection />
   <Blogs />
   </>
  );
}
