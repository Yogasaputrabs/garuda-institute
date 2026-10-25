import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Problems from './sections/Problems';
import Program from './sections/Program';
import TentangGaruda from './sections/TentangGaruda';
import WhyGaruda from './sections/WhyGaruda';
import Training from './sections/Training';
import AlumniSuccess from './sections/AlumniSuccess';
import AlumniGrid from './sections/AlumniGrid';
import Testimonials from './sections/Testimonials';
import FinalCTA from './sections/FinalCTA';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Program />
        <TentangGaruda />
        <WhyGaruda />
        <Training />
        <AlumniSuccess />
        <AlumniGrid />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

export default App;