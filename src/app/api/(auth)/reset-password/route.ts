import { NextResponse } from "next/server";

export async function PATCH(request: Request) {
    const reset = await request.json();
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACK_HOST}/api/users/reset-password`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(reset)
    })

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
}
