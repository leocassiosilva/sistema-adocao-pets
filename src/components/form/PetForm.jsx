import {useState} from 'react';
import Input  from './Input';
import Select from './Select';
import Button from './Button';

/* Passa o handleSubmit e */
function PetForm({handleSubmit, btnText, petData}) {
    const [pet, setPet] = useState(petData || {});
    const [preview, setPreview] = useState([]);
    const colors = ["Branco", "Preto", "Caramelo", "Cinza", "Mesclado", "Outro"];


    function onFileChange(e) {
        setPreview(Array.from(e.target.files));
        setPet({ ...pet, images: [...e.target.files] });
    }

    function handleChange(e) {
        setPet({ ...pet, [e.target.name]: e.target.value });
    }

    function handleColor(e) {
        setPet({ ...pet, color: e.target.options[e.target.selectedIndex].text });
    }           

    function submit(e) {
        e.preventDefault();
        console.log(pet);
        handleSubmit(pet);
    }

    return (
        <form
        onSubmit={submit}
        className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md flex flex-col items-center"
        >
            
            <div className="mb-4 grid grid-cols">
                {preview.length > 0 
                    ? preview.map((image, index) => (
                        <img
                            key={`${pet.name}+${index}`}
                            src={URL.createObjectURL(image)}
                            alt={pet.name}
                            className="w-full h-32 object-cover rounded-md"
                        />
                    ))
                    : pet.images && pet.images.map((image, index) => (
                        <img
                            key={`${pet.name}+${index}`}
                            src={image}
                            alt={pet.name}
                            className="w-full h-32 object-cover rounded-md"
                        />
                    ))}
            </div>
            
            <div className="mb-4 grid grid-cols">

                <Input
                    text="Imagens do Pet"
                    type="file"
                    name="images"
                    handleOnChange={onFileChange}
                    multiple={true}
                />

                <Input 
                    text="Nome do Pet"
                    type="text"
                    name="name"
                    placeholder="Digite o nome do pet"
                    handleOnChange={handleChange}
                    value={pet.name || ""}
                />  

            <Input 
                text="Idade do Pet"
                type="text"
                name="age"
                placeholder="Digite a idade do pet"
                handleOnChange={handleChange}
                value={pet.age || ""}
            />
            <Input
                text="Peso do Pet"
                type="text"
                name="weight"
                placeholder="Digite o peso do pet"
                handleOnChange={handleChange}
                value={pet.weight || ""}
            />
            <Select
                text="Selecione a cor do pet"
                name="color"
                options={colors}
                handleOnChange={handleColor}
                value={pet.color || ""}
            />

            <Button text={btnText} />

            </div>

        </form>
    )
}


export default PetForm;