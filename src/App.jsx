import React from 'react';
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Tech from './components/Technology/Tech';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Tech />
      <Contact />
      <Footer />
    </>
  )
}

export default App