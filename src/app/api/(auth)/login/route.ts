import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const user = await request.json()

    const response = await fetch("https://backend-parkingnow.onrender.com/api/auth/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(user)
    })

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}