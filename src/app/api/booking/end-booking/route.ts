import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const token = request.headers.get('Authorization');
    const endbooking = await request.json()

    const response = await fetch(`${process.env.BACK_HOST}/api/bookings/end-booking`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        body: JSON.stringify(endbooking),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}

export async function PATCH(request: Request) {
    const token = request.headers.get('Authorization');

    const response = await fetch(`${process.env.BACK_HOST}/api/bookings/end-booking/terminate`, {
        method: 'PATCH',
        headers: {
            'Authorization': `${token}`
        },
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}