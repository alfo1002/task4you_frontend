import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <>
            <h1>Pagina no encontrada</h1>
            <p>Volver a:{' '}
                <Link className="text-fuchsia-500" to={'/'}>Proyectos</Link>
            </p>
        </>
    )
}
