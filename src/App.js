import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use BrowserRouter as Router
import Header from './pages/Header';
import Mains from './pages/Mains';
import "./App.css"

function App() {
  return (
    <Router>
      <div>
        <Header/>
      
      </div>
      <div className='mains'>
        <Routes> {/* Replace Switch with Routes */}
         
          <Route path="/main" element={<Mains />} /> {/* Use Route with 'element' prop */}
        </Routes> {/* Closing tag for Routes */}
        </div>
    </Router>
  );
}

export default App;


