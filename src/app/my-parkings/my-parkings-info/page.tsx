import ParkingInfoCard from "app/components/ParkingInfoCard/ParkingInfoCard";
import "./myParkingsInfo.css";
import SlotsCard from "app/components/SlotsCard/SlotsCard";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";
import Footer from "app/components/Footer/Footer";


const myParkingsInfo = ()=>{
    return(
        <>
            <main className="myParkingsInfo-main">
                <h1 className="myParkingsInfo-title">Unidad residencial Río Campestre</h1>
                <ParkingInfoCard/>
                <SlotsCard/>

                <div className="myParkingInfo-button">
                    <Link href={"/my-parkings/my-parkings-info/edit-parking"}><Button text={"Editar"}></Button></Link>
                </div>
            </main>
        </>
    )
}

export default myParkingsInfo;