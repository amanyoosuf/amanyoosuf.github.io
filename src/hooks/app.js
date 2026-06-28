import React from 'react';
import './App.css';
import './components/mainCon.css';
import Navbar from './components/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';

// Streamlined Layout feeding your clean single-page ecosystem
const MainLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main single-page portfolio routing anchor */}
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        
        {/* Fallback route: Redirects any accidental multi-page links safely back home */}
        <Route path="*" element={<MainLayout><Home /></MainLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
