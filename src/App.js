import React from 'react';
import Home from './pages/Home';
import Header from './components/Header';
import ONGs from './pages/ONGs';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />    
      <Home />
      <ONGs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
