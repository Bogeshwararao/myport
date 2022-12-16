import React from 'react';
import {Routes,Route} from 'react-router-dom';
import './App.css';


import Home from './Pages/Home';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import About from './Pages/About';
const App = () => {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project" element={<Project /> } />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>



      </div>
  );
}

export default App;
