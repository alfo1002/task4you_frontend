import { getProjects } from "@/api/ProjectAPI"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

export const DashboardView = () => {

    const { data, isLoading } = useQuery({
        queryKey: ['projects'],
        queryFn: getProjects
    })

    if (isLoading) return <p>Cargando...</p>

    if (data) return (
        <>
            <h1 className="text-5xl font-black">Mis Proyectos</h1>
            <p className="text-2xl font-light text-gray-500 mt-5">Maneja y Administra tus Proyectos</p>

            <nav className="my-10">
                <Link className="bg-pink-600 hover:bg-pink-800 
                        px-10 py-3 text-white text-xl font-bold cursor-pointer 
                        transition-colors duration-300 ease-in-out" to="/projects/create">
                    Crear Proyecto
                </Link>
            </nav>

            {data.length ? (
                <p>Si hay Proyectos</p>
            ) : (
                <p className="text-center py-20">
                    Aún no tienes proyectos, <Link to="/projects/create" className="text-pink-600">Crea tu primer proyecto</Link>
                </p>
            )}
        </>
    )
}
