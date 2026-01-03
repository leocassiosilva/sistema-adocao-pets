import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../../../../../frontend/src/utils/api";



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
        <section className="p-10">
            <h1>Detalhes do Pet: {pet.name}</h1>
        </section>
    );

}

export default PetDetails;