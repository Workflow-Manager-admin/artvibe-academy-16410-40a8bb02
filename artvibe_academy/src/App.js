import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import SectionRouter from './components/SectionRouter';

// PUBLIC_INTERFACE
/**
 * Main App for ArtVibe Academy — wires up routing and containers.
 */
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main style={{ paddingTop: 80 }}>
          <div className="container">
            <SectionRouter />
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;