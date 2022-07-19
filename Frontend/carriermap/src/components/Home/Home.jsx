import React from 'react'
import Navbar from '../Navbar/Navbar';
import  {CarouselComp} from '../Carousel/Carousel';
import About from '../AboutUsSec/About';
import Contact from '../ContactUsSec/Contact';
import Footer from '../Footer/Footer';
import Services from '../Services/Services';

function Home() {
  return (
 <>
    <Navbar>
         Carriermap
      </Navbar>
    <CarouselComp/>
    <About/>
    <Contact/>
    <Services/>
    <Footer/>
 </>
  ) 
}

export default Home 