import { NextResponse } from 'next/server';

export async function POST() {
    const response = NextResponse.json({ message: 'Logout successful' });

    response.cookies.set('servToken', '', {
        maxAge: -1,
        path: '/',
    });

    return response;
}