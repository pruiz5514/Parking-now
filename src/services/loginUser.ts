import { ILogin } from "app/types/ILogin";
import { errorAlert } from "app/utils/alerts";

export async function login(user: ILogin) {
    const response = await fetch("/api/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    });

    console.log(response.status)

    const data = await response.json();

    if (!response.ok) {
        if (data.message === "Invalid credentials") {
            errorAlert("Credenciales inválidas");
            throw Error("Credenciales inválidas");
        }
        else {
            errorAlert("No se pudo iniciar sesión. Intente más tarde.")
            throw Error("No se pudo iniciar sesión. Intente más tarde")
        }
    }
    if (response.status === 500) {
        errorAlert("No se pudo iniciar sesión. Intente más tarde.")
        throw Error("No se pudo iniciar sesión. Intente más tarde")
    };



    return data.data;
}