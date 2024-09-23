import { getProjectById } from "@/api/ProjectAPI"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

export const EditProjectView = () => {

    const params = useParams()
    const projectId = params.projectId!

    const { data, isLoading, error, isError } = useQuery({
        queryKey: ['editProject', projectId],
        queryFn: () => getProjectById(projectId),
        //retry: false
    })

    return (
        <div>EditProjectView: {projectId}</div>
    )
}
