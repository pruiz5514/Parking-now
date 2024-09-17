export async function getSlots() {
    const response = await fetch("https://backend-parkingnow-fuyg.onrender.com/api/slots/available", {
        method: 'GET',
        headers: {
            'Content-type': 'Application/json',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZV9pZCI6MiwiaWF0IjoxNzI2NjA1Njg0LCJleHAiOjE3MjY2OTIwODR9.4cLfMvBw1x0eYeU9i0Bg-57_2WvHRKDpx3H3n4nSnqU`
        }
    });
    const data = await response.json();
    console.log(data);


    if (!response.ok) {
        throw Error("No se pudo obtener la información, intente mas tarde")
    }

    return data;
}