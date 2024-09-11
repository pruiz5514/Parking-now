import { NextResponse } from "next/server";
import { JSONFilePreset } from 'lowdb/node'
import { v4 as uuid } from 'uuid';

export const dbInstance = async () => {
    const db = await JSONFilePreset('db.json', {
        users: [],
        parkings: [{
            id: 1,
            ownerId: 1,
            address: 'Aviva Affinity',
            imageUrl: '',
            createdAt: new Date().getTime(),
            updatedAt: new Date().getTime()
        }],
        parkingsToParkingLots: []
    })
    return db
}


// Las funciones se crean con os nombres de los verbos HTTP

// GET - Para devolver datos al front-end
export async function GET() {
    const db = await dbInstance()
    return NextResponse.json(db.data.parkings)

    // const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    // const data = await response.json()
    // return NextResponse.json(data)
}

// POST - Para crear un parqueadero 
export async function POST(request: Request) {
    const db = await dbInstance()
    const body = await request.json()
    const id = uuid()
    const createdAt = new Date().getTime()
    const updatedAt = new Date().getTime()
    // Haria validaciones de datos, osea que esten completos

    db.data.parkings.push({ id, ...body, createdAt, updatedAt })

    await db.write()
    return NextResponse.json(db.data.parkings.find(parking => parking.id === id))
}