import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const parking = await request.json();

    console.log(parking);
    

    const response = await fetch('https://backend-parkingnow.onrender.com/api/properties', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwicm9sZV9pZCI6MiwiaWF0IjoxNzI2NTg3NjE0LCJleHAiOjE3MjY2NzQwMTR9.zCJ-64p-JTC3NByDPEWE8mMO8620bfm-bAfI4N4L5RU'
        },
        body: JSON.stringify(parking),
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}