import api from "@/lib/axios";
import { RequestConfirmationCodeForm, UserRegistrationForm } from "@/types";
import { isAxiosError } from "axios";

export async function createAccount(formData: UserRegistrationForm) {
    try {
        const url = 'auth/create-account'
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response?.data.error)
        }
    }
}

export async function confirmAccount(formData: { token: string }) {
    try {
        const url = '/auth/confirm-account'
        console.log("formData: ", formData)
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response?.data.error)
        }
    }
}

export async function requestConfirmationCode(formData: RequestConfirmationCodeForm) {
    try {
        const url = '/auth/request-code'
        console.log("formData: ", formData)
        const { data } = await api.post<string>(url, formData)
        return data
    } catch (error) {
        if (isAxiosError(error) && error.response) {
            throw new Error(error.response?.data.error)
        }
    }
}