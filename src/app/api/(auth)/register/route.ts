import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const user = await request.json();

    const response = await fetch(`${process.env.BACK_HOST}/api/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}