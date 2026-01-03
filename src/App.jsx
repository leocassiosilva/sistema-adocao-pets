import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'

/*Page*/
import Home from './components/pages/Home' 
import PetDetails from './components/pages/Pet/PetDetails'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<PetDetails />} />

        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App

