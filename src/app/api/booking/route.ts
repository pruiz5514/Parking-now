import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const booking = await request.json();
    const token = request.headers.get('Authorization');
    
    const response = await fetch('https://backend-parkingnow-fuyg.onrender.com/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        body: JSON.stringify(booking),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}