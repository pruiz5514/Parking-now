import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
    const email = await request.json();
    const response = await fetch("https://backend-parkingnow-fuyg.onrender.com/api/users/request-password", {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(email)
    })

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}
