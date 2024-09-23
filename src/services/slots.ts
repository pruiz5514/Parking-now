import { ISlots } from "app/types/ISlots";
import { errorAlert, successAlert } from "app/utils/alerts";
import Cookies from 'js-cookie';

export async function getSlots(token: string) {

    const response = await fetch("api/slots", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw Error("No se pudo obtener la información, intente nuevamente")
    }
    return data.data;
}

export async function createSlots(slots: ISlots[]) {
    const response = await fetch('/api/slots', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('token')}`
        },
        body: JSON.stringify(slots)
    })

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error message:', errorData.message);

        if (response.status !== 201) {
            errorAlert("No se puedo crear la celda, por favor intente nuevamente");
            throw Error("No se puedo crear la celda, por favor intente nuevamente");
        }
    }
    else {
        successAlert("Celda creada exitosamente")
    }

    const data = await response.json();
    return data;
}

export async function getSlotById(token: string, id: string) {

    const response = await fetch(`/api/slots/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    const data = await response.json();
    if (!response.ok) {
        throw Error("No se pudo obtener la información de la celda, intente nuevamente")
    }
    return data.data;
}

export async function deleteSlot( id: string) {

    const response = await fetch(`/api/slots/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${Cookies.get('token')}`
        },
    });

    const data = await response.json();
    if (!response.ok) {
        throw Error("No se pudo eliminar la celda, intente nuevamente")
    }
    return data.success;
}