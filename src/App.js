import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LifeLeech from './components/LifeLeech';
import ManaLeech from './components/ManaLeech';
import Crit from './components/Crit';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/life-leech" element={<LifeLeech />} />
        <Route exact path="/mana-leech" element={<ManaLeech />} />
        <Route exact path="/crit" element={<Crit />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
