import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

/*Page*/
import Home from './components/pages/Home' 

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App

