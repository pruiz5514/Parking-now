/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import "./my-parkings.css"
import Button from "app/components/UI/Button/Button";
import { useEffect, useState } from "react";
import { Property } from "app/types/IParking";
import { getMyParkings } from "app/services/parkings";


const MyParkings = () => {
    const [parkings, setParkings] = useState<Property[]>([])

    useEffect(() => {
        const getParkings = async () => {
            const myParkings = await getMyParkings()
            setParkings(myParkings.data)
        }
        getParkings()
    }, [])

    return (
        <>
            <main className="my-parkings-main">
                <h1 className="title">Mis parqueaderos</h1>
                <section className="container-card">
                    {parkings.map(parking => {
                        return (<article key={parking.id} className="my-parkings-section">
                            <div>
                                <h3 className="my-parkings-title">{parking.name}</h3>
                                <img className="my-parking-image" alt="propiedad" src={parking.image_url} />
                                {/* <Link href={`/my-parkings/edit-parking?parkingId=${parking.id}`}><Button text={"Editar"} /> </Link> */}
                            </div>
                        </article>)
                    })}

                </section>
            </main>
        </>

    )
}

export default MyParkings;