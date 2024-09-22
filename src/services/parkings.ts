import { IRegisterParking } from "app/types/IRegisterParking";
import { errorAlert, successAlert } from "app/utils/alerts";
import Cookies from "js-cookie";

export async function createParking(parking: IRegisterParking, token: string) {
    const response = await fetch('/api/parking', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(parking)
    })

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error message:', errorData.message);

        if (response.status !== 201) {
            errorAlert("No se puedo crear parqueadero, por favor intente mas tarde");
            throw Error("No se puedo crear parqueadero, por favor intente mas tarde");
        }
    }
    else {
        successAlert("Parquedero creado exitosamente")
    }

    const data = await response.json();
    return data;
}

export async function getMyParkings() {
    const token = Cookies.get('token')
    const response = await fetch('/api/parking', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    if (!response.ok) {
            throw new Error('Hubo un error trayendo las propiedades')
        }
    const data = await response.json()
    return data;
}

export async function getParkingById(id: string) {
    const token = Cookies.get('token')
    const response = await fetch(`/api/parking/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
    if (!response.ok) {
            throw new Error('Hubo un error trayendo la propiedad')
        }
    const data = await response.json()
    return data;
}

export async function updateParking(id: string, parking: IRegisterParking ) {
    const token = Cookies.get('token')
    const response = await fetch(`/api/parking/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(parking)
    })

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error message:', errorData.message);

        if (response.status !== 201) {
            errorAlert("No se puede actualizar parqueadero, por favor intente mas tarde");
            throw Error("No se puede actualizar parqueadero, por favor intente mas tarde");
        }
    }
    else {
        successAlert("Parquedero actualizado exitosamente")
    }

    const data = await response.json();
    return data;
}