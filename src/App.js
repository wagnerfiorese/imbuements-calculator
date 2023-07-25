import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Vampirism from './components/Vampirism';
import Void from './components/Void';
import Strike from './components/Strike';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/imbuements-calculator" element={<Home />} />
        <Route exact path="/vampirism" element={<Vampirism />} />
        <Route exact path="/void" element={<Void />} />
        <Route exact path="/strike" element={<Strike />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
