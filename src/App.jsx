import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';


function App() {
  return (
    <div>
      {/* Conteúdo será adicionado aqui */}
      <Navbar />
      <Router>
        <Routes>
        </Routes>  
      </Router>
      <Footer />
    </div>
  )
}

export default App

