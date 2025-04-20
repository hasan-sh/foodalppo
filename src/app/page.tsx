import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Location from "../components/Location";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-amber-50">
      <Hero />
      <Menu />
      <Location />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
