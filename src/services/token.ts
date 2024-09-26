import { error } from "console";

export async function verifyToken(token: string) {
    const response = await fetch(`https://parking-now.vercel.app/api/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ token })
    });

    if (response.status === 400) {
        throw error("No se pudo encontrar un token")
    } else if (response.status === 401) {
        throw error("Token no válido o expirado")
    }

    const data = await response.json();
    return data
}