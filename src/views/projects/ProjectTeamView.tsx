import { Link, useNavigate, useParams } from "react-router-dom"

export const ProjectTeamView = () => {

    const navigate = useNavigate()
    const params = useParams()
    const projectId = params.projectId!

    return (
        <>
            <h1 className="text-5xl font-black">Administrar Equipo</h1>
            <p className="text-2xl font-light text-gray-500 mt-5">Administra el equipo de trabajo para este proyecto</p>

            <nav className="my-5 flex gap-3">
                <button
                    type="button"
                    className="bg-pink-500 hover:bg-pink-700 px-10 py-3 text-white text-xl
                    font-bold cursor-pointer transition-colors duration-300 ease-in-out"
                    onClick={() => navigate(location.pathname + '?newTask=true')}
                >
                    Agregar Colaborador
                </button>
                <Link
                    className="bg-pink-700 hover:bg-pink-900 px-10 py-3 text-white text-xl
                font-bold cursor-pointer transition-colors duration-300 ease-in-out"
                    to={`/projects/${projectId}`}>
                    Volver a Proyecto
                </Link>
            </nav>
        </>
    )
}
