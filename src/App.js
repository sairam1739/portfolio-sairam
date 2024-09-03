import './App.css';
import Navabar from './components/Navabar';
import Home from './components/Home'
import Skills from './components/Skills';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

function  App() {
  useEffect(() => {
   Aos.init()
  
  
  }, [])
  
  return (
    < >
     <Navabar/>
     <div className='container'>
      <Home/>
      <Skills/>
      <Projects/>
      <Contact/>
     </div>
    </>
  );
}

export default App;
