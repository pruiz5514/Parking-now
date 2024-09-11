import { NextResponse } from "next/server";
import { dbInstance } from '../route'

interface ParamsType {
    params: {
        id: string
    }
}

// GET - Para devolver datos al front-end
export async function GET(request: Request, { params }: ParamsType) {
    const db = await dbInstance()
    const { id } = params
    return NextResponse.json(db.data.parkings.find(parking => parking.id.toString() === id))
}