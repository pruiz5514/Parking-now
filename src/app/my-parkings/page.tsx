"use client"
import ParkCard from "app/components/ParkCard/ParkCard";
import "./myParkings.css"

const MyParkings = ()=>{
    return(
        <>
            <main className="myParkings-main">
                <h1 className="myParkings-title">Mis parqueaderos</h1>
                <section className="myParkings-section">
                    {/* <ParkCard href={"/my-parkings/my-parkings-info"} text={"Ver más"}/>
                    <ParkCard href={"/my-parkings/my-parkings-info"} text={"Ver más"}/>
                    <ParkCard href={"/my-parkings/my-parkings-info"} text={"Ver más"}/>
                    <ParkCard href={"/my-parkings/my-parkings-info"} text={"Ver más"}/> */}
                </section>
                
            </main>
        </>
        
    )
}

export default MyParkings;