"use client"
import ParkCard from "app/components/ParkCard/ParkCard";
import "./myParkings.css"
import Link from "next/link";
import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";
import Footer from "app/components/Footer/Footer";

const MyParkings = ()=>{
    return(
        <>
            <Header>
                <li><Link href="/parkings">Inicio</Link></li>
                <li><Link href="/register-parking">Publicar parqueadero</Link></li>
                <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
                <li> <Link href="/"><Button text={"Cerrar sesión"}/></Link></li>
            </Header>
            <main className="myParkings-main">
                <h1 className="myParkings-title">Mis parqueaderos</h1>
                <section className="myParkings-section">
                    <ParkCard href={"/my-parkings/my-parkings-info"} text={"Ver más"}/>
                    <ParkCard href={"/my-parkings/my-parkings-info"} text={"Ver más"}/>
                    <ParkCard href={"/my-parkings/my-parkings-info"} text={"Ver más"}/>
                    <ParkCard href={"/my-parkings/my-parkings-info"} text={"Ver más"}/>
                </section>
                
            </main>

            <Footer/>
        </>
        
    )
}

export default MyParkings;