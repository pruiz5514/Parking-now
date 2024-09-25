/* eslint-disable @next/next/no-img-element */
"use client"
import Link from "next/link";
import "./my-parkings.css"
import Button from "app/components/UI/Button/Button";
import { useEffect, useState } from "react";
import { IParkingResponse } from "app/types/IParking";
import { deleteParking, getMyParkings } from "app/services/parkings";
import { IoClose } from "react-icons/io5";
import { confirmAlert, errorAlert, successAlert } from "app/utils/alerts";
import Spinner from "app/components/Spinner/Spinner";


const MyParkings = () => {
    const [parkings, setParkings] = useState<IParkingResponse[]>([])
    const [loading, setLoading] = useState(true); 

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
            setLoading(true);
            try {
                const myParkings = await getMyParkings()
                setParkings(myParkings.data)
            }
            catch (e) {
                console.log(e);
                errorAlert("No se pudo obtener la información, intente mas tarde");
            }
            finally {
                setLoading(false);
            }

        }
        getParkings()
    }, [])

    console.log(parkings)
    return (
        <>
            <main className="my-parkings-main">
                <h1 className="title">Mis parqueaderos</h1>
                <section className="container-card">
                    {loading ? (
                        <Spinner />
                    ) : parkings && parkings.length > 0 ? (parkings.map(parking => {
                        return (<article key={parking.id} className="my-parkings-section">
                            <button className="button-delete" onClick={() => onDeleteClick(parking.id)} > <IoClose /> </button>
                            <div>
                                <h3 className="my-parkings-title">{parking.name}</h3>
                                <img className="my-parking-image" alt="propiedad" src={parking.image_url} />
                                <Link href={`/my-parkings/edit-parking?parkingId=${parking.id}`}><Button text={"Editar"} /> </Link>
                            </div>
                        </article>)
                    })) : (
                        <p>No tienes parqueaederos registrados</p>
                    )}

                </section>
            </main>
        </>

    )
}

export default MyParkings;