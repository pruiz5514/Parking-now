export async function getParkings() {
    const response = await fetch("https://backend-parkingnow.onrender.com/api/properties");
    const data = await response.json();

    return data;
}