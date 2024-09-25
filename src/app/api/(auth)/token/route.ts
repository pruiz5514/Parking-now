import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const secretKey = process.env.JWT_KEY;

export async function POST(request: NextRequest) {
    const { token } = await request.json();

    if (!token) {
        return NextResponse.json({ error: 'No hay token' }, { status: 400 });
    }
    try {
        const verify = jwt.verify(token, secretKey as jwt.Secret);
        return NextResponse.json({ success: true, verify });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Token no válido o expirado' }, { status: 401 });
    }
}