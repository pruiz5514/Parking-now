import { IRegisterParking } from "app/types/IRegisterParking";
import { errorAlert, successAlert } from "app/utils/alerts";

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