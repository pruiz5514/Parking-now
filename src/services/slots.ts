export async function getSlots(token: string) {
    const response = await fetch("https://backend-parkingnow-fuyg.onrender.com/api/slots/available", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw Error("No se pudo obtener la información, intente mas tarde")
    }

    return data.data;
}