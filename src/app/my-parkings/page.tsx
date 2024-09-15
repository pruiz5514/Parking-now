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
            <main className="myParkings-main">
                <h1 className="myParkings-title">Mis parqueaderos</h1>
                <section className="myParkings-section">
                    <ParkCard href={"/my-parkings/my-parkings-info"} text={"Ver más"}/>
                    <ParkCard href={"/my-parkings/my-parkings-info"} text={"Ver más"}/>
                    <ParkCard href={"/my-parkings/my-parkings-info"} text={"Ver más"}/>
                    <ParkCard href={"/my-parkings/my-parkings-info"} text={"Ver más"}/>
                </section>
                
            </main>
        </>
        
    )
}

export default MyParkings;