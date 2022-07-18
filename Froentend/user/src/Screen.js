
import Navbar from './Components/Navbar/Navbar';
import  {CarouselComp} from './Components/Carousel/Carousel';

import About from './Components/AboutUsSec/About';
import Contact from './Components/ContactUsSec/Contact';

import Dashboard from './Dashboard';


function Screen() {
  return (
    <div className="App">
     
      <Navbar>
         Carriermap
      </Navbar>
    <CarouselComp/>
    <About/>
    <Contact/>
    
    
    </div>
  );
}

export default Screen;
