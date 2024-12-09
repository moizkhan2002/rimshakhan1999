import Image from "next/image";
import Navbar from "./components/Navbar";
import Mininavbar from "./components/Mininavbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
   <div>
    <Mininavbar />
    <Navbar />
    <Hero />
   </div>
  );
}
