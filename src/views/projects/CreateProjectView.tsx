import { Link } from "react-router-dom"

export const CreateProjectView = () => {
    return (
        <>
            <h1 className="text-5xl font-black">Crear Proyecto</h1>
            <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario para crear un proyecto</p>

            <nav className="my-10">
                <Link className="bg-pink-600 hover:bg-pink-800 
                        px-10 py-3 text-white text-xl font-bold cursor-pointer 
                        transition-colors duration-300 ease-in-out"
                    to="/">
                    Volver a Proyectos
                </Link>
            </nav>
        </>
    )
}
