import { IForgotPassword } from "app/types/IForgotPassword";
import { errorAlert } from "app/utils/alerts";

export async function forgotPassword(email: IForgotPassword) {
    const response = await fetch("/api/forgot-password", {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(email)
    })

    if(!response.ok){
        errorAlert("No se pudo enviar el email, intente mas tarde");
        throw Error("No se pudo enviar email")
    }
    const data = await response.json();

    return data.data
}
