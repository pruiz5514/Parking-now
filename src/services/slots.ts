export async function getSlots() {
    const response = await fetch("https://backend-parkingnow.onrender.com/api/slots/available");
    const data = await response.json();

    if (!response.ok) {
        throw Error("No se pudo obtener la información, intente mas tarde")
    }

    return data;
}