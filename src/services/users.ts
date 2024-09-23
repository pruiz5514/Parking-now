import { IUpdateUser } from "app/types/IUsers";
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

export async function deleteUserById(token: string, id: string) {
    const response = await fetch(`https://backend-parkingnow-fuyg.onrender.com/api/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    const data = await response.json();
}

export async function getUserById(token: string, id: string) {
    const response = await fetch(`/api/users/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `Bearer ${token}`
        }
    });
    if (!response.ok) {
        errorAlert("No se pudo obtener el usuario")
        throw Error("No se pudo obtener el usuario")
    }
    const data = await response.json();
    return data.data
}

export async function editUser(token: string, id: string, user: IUpdateUser) {
    const response = await fetch(`/api/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })

    if (!response.ok) {
        errorAlert("No se pudo editar el usuario, intente mas tarde");
        throw Error("No se pudo editar el usuario, intente mas tarde")
    }
    const data = await response.json();

    return data.data
}