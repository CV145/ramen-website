import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import MenuPage from './components/MenuPage';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/ramen-website" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App
