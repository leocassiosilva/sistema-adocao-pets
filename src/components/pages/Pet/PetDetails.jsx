import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../../../../frontend/src/utils/api";
import { motion } from "motion/react"



function PetDetails ()  {
    const [pet, setPet] = useState({});
    const { id } = useParams();


    useEffect(() => {

        document.title = "Detalhe - Get A Pet";
        api.get(`/pets/${id}`).then((response) => {
            setPet(response.data.pet);
            console.log(response.data.pet);
        });
    },[id]);

    return (
        <section class="p-10">
            <div class="flex flex-col items-center justify-center mb-8 gab-4"> 
                <h1 class="font-extrabold text-4xl text-center">Detalhes do Pet: {pet.name}</h1>
                <p>Se estiver interessado, entre em contato com o tutor para mais informações.</p>
            </div>
            <div class="flex flex-col md:flex-row gap-6 items-center justify-center">
                <div class="md:w-1/3 border-amber-950">
                    {pet.images && pet.images.map((image, index) => (
                        <div className="overflow-hidden rounded-lg max-w-sm mx-auto">
                            <motion.img
                                src={`${import.meta.env.VITE_API_URL}/images/pets/${image}`}
                                alt={pet.name}
                                className="w-full aspect-square object-cover"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                            />
                        </div>



                    ))}
              
                    <h2 class="text-2xl font-bold mb-4">Informações</h2>
                    <p class="mb-2"><strong>Nome:</strong> {pet.name}</p>
                    <p class="mb-2"><strong>Idade:</strong> {pet.age} anos</p>
                    <p class="mb-2"><strong>Peso:</strong> {pet.weight} kg</p>
                    <p class="mb-2"><strong>Cor:</strong> {pet.color}</p>
                    {pet.available ? (
                        <p class="text-green-600 font-bold">Disponível para adoção</p>
                    ) : (
                        <p class="text-red-600 font-bold">Já adotado</p>
                    )}
                    <div class="mt-8">
                        <Link to="/" class="inline-block px-4 py-2 bg-yellow-300 text-white rounded hover:bg-yellow-400 transition">
                            Voltar para a Home
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default PetDetails;