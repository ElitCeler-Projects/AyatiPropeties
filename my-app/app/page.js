import Image from "next/image";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Grid from "./components/Grid";
import Factor from "./components/Factor";
import Minds from "./components/Minds";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <>
      <Hero/>
      <Experience/>
      <Grid/>
      <Factor/>
      <Minds/>
      <Footer/>
    </>
  );
}
