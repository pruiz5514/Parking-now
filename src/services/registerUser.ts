import { IRegisterUser } from "app/types/IRegisterUser";
import { errorAlert, successAlert } from "app/utils/alerts";

export async function createUser(user: IRegisterUser) {
    const response = await fetch("/api/register", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    console.log(response.status);

    if (!response.ok) {
        const errorData = await response.json();
        console.error('Error message:', errorData.message);

        if (response.status === 400) {
            errorAlert("Usuario ya se encuentra registrado");
            throw Error("Usuario ya se encuentra registrado");
        }
        else {
            errorAlert("No se puedo crear usuario, por favor intenre mas tarde");
            throw Error("No se puedo crear usuario, por favor intenre mas tarde");
        }
    }
    else {
        successAlert("Usuario creado exitosamente")
    }

    const data = await response.json();
    return data;
}