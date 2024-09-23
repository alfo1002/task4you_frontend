import { useParams } from "react-router-dom"

export const EditProjectView = () => {

    const params = useParams()
    const projectId = params.projectId!

    return (
        <div>EditProjectView: {projectId}</div>
    )
}
