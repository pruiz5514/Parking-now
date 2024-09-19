// import { IRegisterParking } from "app/types/IRegisterParking";
import { ISlots } from "app/types/ISlots";
import { errorAlert, successAlert } from "app/utils/alerts";

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
        throw Error("No se pudo obtener la información, intente mas tarde")
    }
    return data.data;

}


export async function getSlotById(token: string, id:string) {

    const response = await fetch(`api/slotById/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw Error("No se pudo obtener la información, intente mas tarde")
    }
    return data.data;
}

export async function createSlots(slots: ISlots, token: string) {
    const response = await fetch('/api/slots', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(slots)
    })

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error message:', errorData.message);

        if (response.status !== 201) {
            errorAlert("No se puedo crear la celda, por favor intente mas tarde");
            throw Error("No se puedo crear la celda, por favor intente mas tarde");
        }
    }
    else {
        successAlert("Celda creada exitosamente")
    }

    const data = await response.json();
    return data;
}
