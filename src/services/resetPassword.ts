import { IResetPassword } from "app/types/IForgotPassword";
import { errorAlert } from "app/utils/alerts";

export async function resetPassword(reset: IResetPassword) {
    const response = await fetch("/api/reset-password", {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(reset)
    })

    if (!response.ok) {
        errorAlert("No se pudo restablecer contraseña");
        throw Error("No se pudo restablecer contraseña")
    }
    const data = await response.json();

    return data.data
}
