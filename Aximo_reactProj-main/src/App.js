import React from 'react';
// import React, { useEffect, useRef } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import 'aos/dist/aos.css';  // Import AOS CSS

// Importing individual components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Team from './pages/Team';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Bloggrid from './pages/Bloggrid';
import Comingsoon from './pages/Comingsoon';
import Singleportfolio from './pages/Singleportfolio';
import Faq from './pages/Faq';
import Error404 from './pages/Error404';
import Home02 from './pages/Home02';
import Home03 from './pages/Home03';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

// // Importing JS libraries
// import { gsap } from 'gsap';
// import AOS from 'aos';
// import Isotope from 'isotope-layout';
// import Modal from 'react-modal';

function App() {
  //   const gridRef = useRef(null);  // Using ref to target the grid container

  //   useEffect(() => {
  //     // Initializing AOS (Animate On Scroll)
  //     AOS.init();

  //     // Example of using GSAP for animations
  //     gsap.from('.box', { opacity: 0, duration: 2, y: 50 });

  //     // Ensure grid element is available before initializing Isotope
  //     if (gridRef.current) {
  //       const iso = new Isotope(gridRef.current, {
  //         itemSelector: '.grid-item',
  //         layoutMode: 'fitRows',
  //       });

  //       // Cleanup Isotope when component unmounts
  //       return () => {
  //         iso.destroy();
  //       };
  //     }

  //   }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Team' element={<Team />} />
        <Route path='/Signin' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Pricing' element={<Pricing />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Bloggrid' element={<Bloggrid />} />
        <Route path='/Comingsoon' element={<Comingsoon />} />
        <Route path='/Singleportfolio' element={<Singleportfolio />} />
        <Route path='/Faq' element={<Faq />} />
        <Route path='/Error404' element={<Error404 />} />
        <Route path='/Home02' element={<Home02 />} />
        <Route path='/Home03' element={<Home03 />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
