import Features from './components/Features';
import Services from './components/Services';
import WhyInvest from './components/WhyInvest';
import {Hero} from './components/Hero';
import SobreNosotros from './components/SobreNosotros';
import { Car } from 'lucide-react';
import { Carousel } from './components/Carousel';

function App() {
  return (
    <div className="w-7xl mx-auto">
     
     
      
      <Hero />
      <Features />
      <Carousel/>
      <Services />
      <SobreNosotros/>
      <WhyInvest />
      
   
    </div>
  );
}

export default App;
