import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Render Home directly since Home now contains its own clean minimalist sidebar/layout */}
        <Route path="/" element={<Home />} />
        
        {/* Fallback route: Redirects any broken links safely back home */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
