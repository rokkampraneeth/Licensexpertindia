import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Wizard from './components/Wizard';
import Stats from './components/Stats';
import Products from './components/Products';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import './style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Wizard />
        <Stats />
        <Products />
        <FAQ />
        <Testimonials />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
