import api from "../../../utils/api";   
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/* Hooks */
import useFlashMessage from '../../../hooks/useFlashMessage';

function Mypets() {
    const [pets, setPets] = useState([]);
    const [token] = useState(localStorage.getItem("token") || "");
    const {setFlashMessage} = useFlashMessage();

    useEffect(() => {

        document.title = "Meus Pets - Get A Pet";

        api.get('/pets/mypets', {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`
            }
        }).then((response) => {
            console.log(response.data.pets);
            setPets(response.data.pets);
        })
    }, [token]);


    async function removePet(id) {
        let msgType = 'success'
        const data = await api
        .delete(`/pets/${id}`, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`,
            },
        })
        .then((response) => {
            const updatedPets = pets.filter((pet) => pet._id !== id)
            setPets(updatedPets)
            return response.data
        })
        .catch((err) => {
            msgType = 'error'
            console.log("ERRO AO REMOVER:", err)
            // Tratamento seguro
            const errorMessage =
            err.response?.data?.message || // Mensagem do backend
            err.message ||                 // Erro do axios
            "Erro desconhecido ao excluir o pet."
            return { message: errorMessage }
        })
        setFlashMessage(data.message, msgType)
    }

    async function concludeAdoption(id) {
        let msgType = 'success'
        const data = await api
        .patch(`/pets/conclude/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`    
            },
        })
        .then((response) => {
            return response.data
        }).catch((err) => {
            msgType = 'error'
            return err.response.data
        })
        setFlashMessage(data.message, msgType)
    }

    return (
        <section className="p-10">
            <div className="flex flex-col items-center justify-center mb-8 gab-4">
                <h1 className="text-4xl font-bold">Meus Pets</h1>
                <p>Veja os detalhes dos seus pets cadastrados</p>
            </div>
            
            <div className="flex flex-col"> 
                {pets.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {pets.map((pet) => (
                            <div key={pet._id} className="bg-white rounded-lg shadow-md overflow-hidden border-amber-100">  
                                {pet.images?.length > 0 ? (
                                    <img
                                        src={`${import.meta.env.VITE_API_URL}/images/pets/${pet.images[0]}`}
                                        alt={pet.name}
                                        className="w-full h-64 object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-64 flex items-center justify-center bg-gray-200">
                                        <span className="text-gray-500">Sem imagem</span>
                                    </div>
                                )}
                                <div className="p-4">
                                    <h2 className="text-2xl text-gray-700 font-bold mb-2">{pet.name}</h2>
                                    <p className="text-gray-700 mb-1"><strong>Idade:</strong> {pet.age} anos</p>
                                    <p className="text-gray-700 mb-1"><strong>Peso:</strong> {pet.weight} kg</p>
                                    {pet.available ? (
                                        <>
                                            <Link
                                                to={`/pet/${pet._id}`}
                                                className="inline-block mt-4 px-4 py-2 bg-yellow-300 text-white rounded hover:bg-yellow-400 transition"
                                            >
                                                Editar
                                            </Link>

                                            <button
                                                onClick={() => concludeAdoption(pet._id)}
                                                className="inline-block mt-4 ml-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition cursor-pointer"
                                            >
                                                Concluir Adoção
                                            </button>

                                            <button
                                                onClick={() => removePet(pet._id)}
                                                className="inline-block mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition cursor-pointer"
                                            >
                                                Excluir
                                            </button>
                                        </>


                                    ):(
                                        <p className="text-red-500 font-bold mt-4">Adotado!</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>Você não possui pets cadastrados.</p>
                )}
            </div>
        </section>
    )


}
export default Mypets;