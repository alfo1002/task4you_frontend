import { Link, useNavigate } from "react-router-dom"
import ProjectForm from "./ProjectForm"
import { Project, ProjectFormData } from "@/types"
import { useForm } from "react-hook-form"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateProject } from "@/api/ProjectAPI"
import { toast } from "react-toastify"


type EditProjectFormProps = {
    data: ProjectFormData,
    projectId: Project['_id']
}

export const EditProjectForm = ({ data, projectId }: EditProjectFormProps) => {

    const navigate = useNavigate()
    const initialValues: ProjectFormData = {
        projectName: data.projectName,
        clientName: data.clientName,
        description: data.description
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

    const queryClient = useQueryClient()
    const { mutate } = useMutation({
        mutationFn: updateProject,
        onError: (error) => {
            toast.error(error.message)
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['projects'] })
            queryClient.invalidateQueries({ queryKey: ['editProject', projectId] })
            toast.success(data)
            navigate('/')
        }
    })

    const handleForm = (formData: ProjectFormData) => {
        const data = {
            formData,
            projectId
        }
        mutate(data)
    }

    return (
        <>
            <div className="max-w-3xl mx-auto">


                <h1 className="text-5xl font-black">Editar Proyecto</h1>
                <p className="text-2xl font-light text-gray-500 mt-5">Llena el siguiente formulario de edición de proyecto</p>

                <nav className="my-10">
                    <Link className="bg-pink-600 hover:bg-pink-800 
                        px-10 py-3 text-white text-xl font-bold cursor-pointer 
                        transition-colors duration-300 ease-in-out"
                        to="/">
                        Volver a Proyectos
                    </Link>
                </nav>
                <form className="mt-10 bg-white shadow-lg p-10 rounded-lg"
                    onSubmit={handleSubmit(handleForm)}
                    noValidate
                >
                    <ProjectForm
                        register={register}
                        errors={errors}
                    />

                    <input
                        type="submit"
                        value={'Guardar Cambios'}
                        className="bg-pink-600 hover:bg-pink-800 w-full p-3 text-white
                        uppercase font-bold cursor-pointer transition-colors duration-300 ease-in-out"

                    />
                </form>
            </div>
        </>
    )

}
