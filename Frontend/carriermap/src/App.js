import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import  {CarouselComp} from './components/Carousel/Carousel';
import About from './components/AboutUsSec/About';
import Contact from './components/ContactUsSec/Contact';


function App() {
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

export default App;
