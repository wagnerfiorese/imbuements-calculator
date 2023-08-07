import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './components/AppContext';
import Home from './components/Home';
import Vampirism from './components/Vampirism';
import Void from './components/Void';
import Strike from './components/Strike';
import Footer from './components/Footer';
import Test from './components/Test';
import './App.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route exact path="/imbuements-calculator" element={<Home />} />
          <Route exact path="/vampirism" element={<Vampirism />} />
          <Route exact path="/void" element={<Void />} />
          <Route exact path="/strike" element={<Strike />} />
          <Route exact path="/test" element={<Test />} />
        </Routes>
        <Footer />
      </Router>
    </AppProvider>
  );
};

export default App;
