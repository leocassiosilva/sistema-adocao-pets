import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Container from './components/layout/Container'
import Message from './components/layout/Message'

/*Page*/
import Home from './components/pages/Home' 
import PetDetails from './components/pages/Pet/PetDetails'
import Register from './components/pages/Auth/Register'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Message />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet/:id" element={<PetDetails />} />
          <Route path="/user/register" element={<Register />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App

