export async function getSlots() {
    const response = await fetch("https://backend-parkingnow.onrender.com/api/slots/available", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZV9pZCI6MiwiaWF0IjoxNzI2NTg3NjE0LCJleHAiOjE3MjY2NzQwMTR9.zCJ-64p-JTC3NByDPEWE8mMO8620bfm-bAfI4N4L5RU'
        },
    });
    const data = await response.json();
    console.log(data);


    if (!response.ok) {
        throw Error("No se pudo obtener la información, intente mas tarde")
    }

    return data;
}