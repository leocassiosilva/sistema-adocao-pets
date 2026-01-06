import Input from "../../form/Input"
import { useState, useContext, useEffect } from "react"
/* contexts */
import { Context } from '../../../context/UserContext'

function Register() {
  const [user, setUser] = useState({})
  const { register } = useContext(Context)

  useEffect(() => {
    document.title = "Cadastro | Get A Pet"
  }, [])

  function handleSubmit(e) {
    e.preventDefault()
    register(user)
  }

  function handleOnChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <section className="p-10">
      <div className="flex flex-col items-center justify-center mb-8 gap-4">
        <h1 className="text-2xl font-bold mb-6">
          Cadastre-se na Plataforma
        </h1>

        <form onSubmit={handleSubmit} className="w-full max-w-md">
          <Input
            type="text"
            text="Nome"
            name="name"
            placeholder="Digite seu nome"
            handleOnChange={handleOnChange}
          />

          <Input
            type="text"
            text="Telefone"
            name="phone"
            placeholder="Digite seu telefone"
            handleOnChange={handleOnChange}
          />

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

          <Input
            type="password"
            text="Confirme a Senha"
            name="confirmPassword"
            placeholder="Confirme sua senha"
            handleOnChange={handleOnChange}
          />

          <input
            type="submit"
            value="Cadastrar"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full mt-4"
          />
        </form>
      </div>
    </section>
  )
}

export default Register
