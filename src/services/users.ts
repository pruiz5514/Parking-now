import { errorAlert } from "app/utils/alerts";

export async function getUsers(token: string) {
    const response = await fetch("/api/users", {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
        errorAlert("No se pudo obtener los usuarios")
        throw Error("No se pudo obtener los usuarios")
    }
    const data = await response.json();
    return data.data
}

