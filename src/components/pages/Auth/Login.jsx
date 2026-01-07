import { use, useEffect } from 'react';
import Input from '../../form/Input'
import { useState, useContext } from "react"
import { Link } from 'react-router-dom';

/* contexts */
import { Context } from '../../../context/UserContext'

function Login() {
    const [user, setUser] = useState({})
    const { login } = useContext(Context)

    useEffect(() => {
        document.title = "Login | Get A Pet"
    }, [])

    function handleSubmit(e) {
        e.preventDefault()
        login(user)
    }

    function handleOnChange(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }




    return (
        <section className="p-10">
            <div className="flex flex-col items-center justify-center mb-8 gap-4">
                <h1 className="text-2xl font-bold mb-6">
                Login
                </h1>
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <Input
                        type="email"
                        text="Email"
                        name="email"
                        placeholder="Digite seu email"
                        handleOnChange={handleOnChange}
                    />
                    <Input 
                        type="password" 
                        text="Senha"
                        name="password" 
                        placeholder="Digite sua senha" 
                        handleOnChange={handleOnChange}

                    />
                    <input
                        type="submit"
                        value="Entrar"
                        className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded cursor-pointer transition"
                    />
                </form>
                <p>Ainda não possui uma conta ? <Link to="/user/register" className="text-blue-500 hover:underline">Clique aqui</Link> para se cadastrar.</p>

            </div>
        </section>
    );
}

export default Login;