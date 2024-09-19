import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const token = request.headers.get('Authorization');

    const response = await fetch("https://backend-parkingnow-fuyg.onrender.com/api/slots/available", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}


export async function POST(request: Request) {
    const slots = await request.json();
    const token = request.headers.get('Authorization');

    slots.hour_price = parseInt(slots.hour_price)
    slots.vehicle_type_id = parseInt(slots.vehicle_type_id)

    const response = await fetch('https://backend-parkingnow-fuyg.onrender.com/api/slots', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        body: JSON.stringify(slots),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}