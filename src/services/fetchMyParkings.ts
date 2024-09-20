import Cookies from "js-cookie";

export async function fetchMayParkings() {
    const token = Cookies.get('token')

    try {
        const response = await fetch('https://backend-parkingnow-fuyg.onrender.com/api/properties', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (!response.ok) {
            throw new Error('Hubo un error trayendo las propiedades')
        }

        const data = await response.json()
        return data
    } catch (error) {
        alert(error.message)
    }
}