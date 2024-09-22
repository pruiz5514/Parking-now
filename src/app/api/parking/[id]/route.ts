import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const token = request.headers.get('Authorization');
    const {id} = params;

    const response = await fetch(`https://backend-parkingnow-fuyg.onrender.com/api/properties/searchById?id=${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        }
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const parking = await request.json();
    const token = request.headers.get('Authorization');
    const {id} = params;

    parking.commune_id = parseInt(parking.commune_id)

    const response = await fetch(`https://backend-parkingnow-fuyg.onrender.com/api/properties/${id}` , {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}`
        },
        body: JSON.stringify(parking),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}