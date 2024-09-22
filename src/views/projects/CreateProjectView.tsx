import { Link, Navigate, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"
import ProjectForm from "@/components/projects/ProjectForm"
import { ProjectFormData } from "@/types"
import { createProject } from "@/api/ProjectAPI"

export const CreateProjectView = () => {

    const navigate = useNavigate()
    const initialValues: ProjectFormData = {
        projectName: "",
        clientName: "",
        description: ""
    }

    const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

    const handleForm = async (fromData: ProjectFormData) => {
        const data = await createProject(fromData)
        toast.success(data)
        navigate('/')
    }

    return (
        <>
            <div className="max-w-3xl mx-auto">


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
                        value={'Crear Proyecto'}
                        className="bg-pink-600 hover:bg-pink-800 w-full p-3 text-white
                        uppercase font-bold cursor-pointer transition-colors duration-300 ease-in-out"

                    />
                </form>
            </div>
        </>
    )
}
