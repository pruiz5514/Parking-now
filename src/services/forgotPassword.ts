import { IForgotPassword } from "app/types/IForgotPassword";

export async function forgotPassword(email: IForgotPassword) {
    const response = await fetch("/api/forgot-password", {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(email)
    })

    const data = await response.json();

    return data
}
