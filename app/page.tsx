import About from "#components/section/about";
import Contact from "#components/section/contact-form";
import HowWork from "#components/section/how-work";
import { Slider } from "#components/section/slider";
import Footer from "#components/shared/footer";
import Hero from "#components/shared/hero";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <HowWork/>
      <Slider/>
      <Contact/>
      <Footer/>
    </div>
  );
}
