import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const token = request.headers.get('Authorization');
    const { id } = params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/api/slots/findById/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const token = request.headers.get('Authorization');
    const { id } = params;

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/api/slots/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}

