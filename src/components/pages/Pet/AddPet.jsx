import PetForm from '../../form/PetForm';
import { useEffect, useState } from 'react';
import useFlashMessage from '../../../hooks/useFlashMessage';
import { useNavigate } from 'react-router-dom';
import api from '../../../utils/api';

function AddPet() {
    const [token] = useState(localStorage.getItem('token') || '');
    const { setFlashMessage } = useFlashMessage();
    const navigate = useNavigate();


    async function registerPet(pet) {
        let msgType = 'success';
        const formData = new FormData();
        Object.keys(pet).forEach((key) => {
            if (key === 'images') {
                for (let i = 0; i < pet[key].length; i++) {
                    formData.append('images', pet[key][i]);
                }
            }else {
                formData.append(key, pet[key]);   
            }
        })
        const data = await api .post('pets/create', formData, {
            headers: {
                Authorization: `Bearer ${JSON.parse(token)}`, 
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            return response.data;
        })
        .catch((err) => {
            msgType = 'error';
            return err.response.data;
        });

        setFlashMessage(data.message, msgType);
        if (msgType === 'success') {
            navigate('/pet/mypets');
        }
    }

    useEffect(() => {
        document.title = "Adicionar Pet - Get A Pet";
    }, []);

    return (
        <section class="p-10">
            <div className="flex flex-col items-center align-center mb-8 gab-4">
                <h1 className="text-bold font-extrabold text-4xl text-center">Adicionar Pet</h1>
            </div>
            <PetForm handleSubmit={registerPet} btnText="Cadastrar Pet" />
        </section>
    )
}

export default AddPet;