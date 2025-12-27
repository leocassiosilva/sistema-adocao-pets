import { useState, useEffect } from 'react'
import api from '../../utils/api'
import { motion } from "motion/react"


function Home(){
    const [pets, setPets] = useState([])
    
      useEffect(() => {
        api.get('/pets').then((response) => {
          setPets(response.data.pets)
          console.log(response.data.pets)
        })
      }, [])

    return (
        <section class="p-10">
           <div class="mb-8">
              <h1 class="text-4xl font-bold">Adote um Pet</h1>
              <p>Veja os detalhes de cada um e conheça o tutor deles</p>
           </div>
           
          {/* CONTAINER DOS PETS */}
           {pets.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {pets.map((pet) => (
                  <motion.div
                      key={pet._id}
                      className="bg-white rounded-lg shadow-md overflow-hidden border-amber-100"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.4 }}
                    >
                  <motion.img
                    src={`${import.meta.env.VITE_API_URL}/images/pets/${pet.images[0]}`}
                    alt={pet.name}
                    className="w-full h-64 object-cover rounded-t"
                  />
                  <div className="p-4">
                    <h2 className="text-2xl text-gray-700 font-bold mb-2">{pet.name}</h2>
                    <p className="text-gray-700 mb-1"><strong>Idade:</strong> {pet.age} anos</p>
                    <p className="text-gray-700 mb-1"><strong>Peso:</strong> {pet.weight} kg</p>
                  </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p>Nenhum pet encontrado.</p>
            )}
        </section>
    )
} 

export default Home;