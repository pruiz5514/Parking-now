export async function deleteCookie() {
    const response = await fetch(`${process.env.FRONT_HOST}/api/logout`, {
        method: 'POST',
    });

    const data = await response.json();
    console.log(data.message);
}