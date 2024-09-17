import { IRegisterParking } from "app/types/IRegisterParking";
import { errorAlert, successAlert } from "app/utils/alerts";

export async function createUser(parkings: IRegisterParking) {
    const response = await fetch("/api/parkings", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(parkings)
    });

    console.log(response.status);

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