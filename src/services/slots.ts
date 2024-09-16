export async function getSlots() {
    const response = await fetch("https://backend-parkingnow.onrender.com/api/slots/available");
    const data = await response.json();

    return data;
}