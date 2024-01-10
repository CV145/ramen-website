import React from 'react';
import Header from './components/Header';
import './App.css'
import HeroSection from './components/HeroSection';
import ImageGrid from './components/ImageGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ImageGrid />
      <Footer />
    </div>
  );
}

export default App
