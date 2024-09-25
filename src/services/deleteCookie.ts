export async function deleteCookie() {
    const response = await fetch('http://localhost:3000/api/logout', {
        method: 'POST',
    });

    const data = await response.json();
    console.log(data.message);
}