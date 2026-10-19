// src/components/Portfolio.jsx
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Skills from './Skills';
import Education from './Education';
import Training from './Training';
import Contact from './Contact';

export default function Portfolio() {
  return (
    <div className="bg-gray-50">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Training />
      <Contact />
    </div>
  );
}
