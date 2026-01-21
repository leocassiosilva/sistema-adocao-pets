import logo from '../../assets/img/logo.png';
import { motion } from "motion/react"
import { Link } from "react-router-dom";
import { useContext } from "react";


/* Context*/
import {Context} from '../../context/UserContext'


function Navbar() {
    const {authenticated, logout } = useContext(Context)
    return (
        <nav className="bg-yellow-300 shadow-md fixed w-full top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/">
                    <motion.img
                        src={logo}
                        alt="Get A Pet"
                        className="h-10 w-auto cursor-pointer"
                        whileHover={{ scale: 1.1, rotate: 2 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        />
                </Link>
             
                <ul className="flex gap-6 font-medium">
                    <li>
                        <Link
                        to="/"
                        className="cursor-pointer hover:text-white transition"
                        >
                        Home
                        </Link>
                    </li>



                    {authenticated ? (
                    <>  
                        <li>
                            <Link to="pet/mypets" className="cursor-pointer hover:text-white transition">
                            Meus Pets
                            </Link>
                        </li>
                        <li>
                            <Link to="/pet/add" className="cursor-pointer hover:text-white transition">
                            Adicionar Pet
                            </Link>
                        </li>

                        <li onClick={() => logout()}>
                            Sair
                        </li>
                    </>
                    ) : (
                    <>
                        <li>
                            <Link
                            to="/user/register"
                            className="cursor-pointer hover:text-white transition"
                            >
                            Cadastre-se
                            </Link>
                        </li>

                        <li>
                            <Link
                            to="/user/login"
                            className="cursor-pointer hover:text-white transition"
                            >
                            Login
                            </Link>
                        </li>
                    </>
                    
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;