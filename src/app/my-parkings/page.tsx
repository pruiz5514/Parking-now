/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import "./my-parkings.css"
import Button from "app/components/UI/Button/Button";
import { useEffect, useState } from "react";
import { Property } from "app/types/IParking";
import { deleteParking, getMyParkings } from "app/services/parkings";
import { IoClose } from "react-icons/io5";
import { confirmAlert, errorAlert, successAlert } from "app/utils/alerts";


const MyParkings = () => {
    const [parkings, setParkings] = useState<Property[]>([])

    const onDeleteSlot = async (idParking: string) => {
        try {
            const response = await deleteParking(idParking)
            if (response) {
                successAlert("Parquedero eliminado")
                const myParkings = await getMyParkings()
                setParkings(myParkings.data)
            }
        } catch (error) {
            console.error(error)
            errorAlert("Hubo un error eliminando el parqueadero")
        }
    }

    const onDeleteClick = (idSlot: string) => {
        confirmAlert('Esta seguro que desea eliminar el parqueadero?', () => onDeleteSlot(idSlot))
    }


    useEffect(() => {
        const getParkings = async () => {
            const myParkings = await getMyParkings()
            setParkings(myParkings.data)
        }
        getParkings()
    }, [])

    console.log(parkings)
    return (
        <>
            <main className="my-parkings-main">
                <h1 className="title">Mis parqueaderos</h1>
                <section className="container-card">
                    {parkings.map(parking => {
                        return (<article key={parking.id}  className="my-parkings-section">
                            {parking.slots.length === 0 && <button className="button-delete" onClick={() => onDeleteClick(parking.id)} > <IoClose /> </button>}
                            <div>
                                <h3 className="my-parkings-title">{parking.name}</h3>
                                <img className="my-parking-image" alt="propiedad" src={parking.image_url} />
                                <Link href={`/my-parkings/edit-parking?parkingId=${parking.id}`}><Button text={"Editar"} /> </Link>
                            </div>
                        </article>)
                    })}

                </section>
            </main>
        </>

    )
}

export default MyParkings;