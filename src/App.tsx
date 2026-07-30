import { useLenis } from '@/hooks/useLenis';
import Hero from '@/components/Hero';
import About from '@/components/About';
import HealingJourney from '@/components/HealingJourney';
import WellnessPrograms from '@/components/WellnessPrograms';
import WhyChooseUs from '@/components/WhyChooseUs';
import MeetExperts from '@/components/MeetExperts';
import Transformations from '@/components/Transformations';
import Testimonials from '@/components/Testimonials';
import HealingMethods from '@/components/HealingMethods';
import WellnessBlog from '@/components/WellnessBlog';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

function App() {
  useLenis();

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-white">
      <Hero />
      <About />
      <HealingJourney />
      <WellnessPrograms />
      <WhyChooseUs />
      <MeetExperts />
      <Transformations />
      <Testimonials />
      <HealingMethods />
      <WellnessBlog />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
