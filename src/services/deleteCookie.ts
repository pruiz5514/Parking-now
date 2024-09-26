export async function deleteCookie() {
    const response = await fetch(`https://parking-now.vercel.app/api/logout`, {
        method: 'POST',
    });

    const data = await response.json();
    console.log(data.message);
}