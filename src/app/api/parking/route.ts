import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const parking = await request.json();
    const token = request.headers.get('Authorization');

    parking.commune_id = parseInt(parking.commune_id)

    const response = await fetch('https://backend-parkingnow-fuyg.onrender.com/api/properties', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        body: JSON.stringify(parking),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}