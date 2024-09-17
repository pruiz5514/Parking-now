import { IRegisterUser } from "app/types/IRegisterUser";
import { errorAlert, successAlert } from "app/utils/alerts";

export async function createUser(user: IRegisterUser) {
    const response = await fetch("https://backend-parkingnow.onrender.com/api/auth/register", {
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

    }

    if (response.status === 400) {
        errorAlert("Usuario ya se encuentra registrado");
        throw Error("Usuario ya se encuentra registrado");
    }
    else if (response.status !== 400 && response.status !== 201) {
        errorAlert("No se puedo crear usuario, por favor intenre mas tarde");
        throw Error("No se puedo crear usuario, por favor intenre mas tarde");
    }
    else if (response.ok) {
        successAlert("Usuario creado exitosamente")
    }

    const data = await response.json();
    console.log(data.message);
    return data;
}