"use client"
import Header from "app/components/Header/Header"
import Button from "app/components/UI/Button/Button"
import Link from "next/link"
import Cookies from 'js-cookie';
import { logout } from "app/utils/logout";
import { useRouter } from "next/navigation";

const Layout = ({children}: {children:React.ReactNode})=>{
    const admin = Cookies.get("email");
    const router = useRouter();
    return(
        <>
            <Header>
                {admin !== "parkingnowcontacto@gmail.com" ? (
                <>
                    <li><Link href="/parkings">Inicio</Link></li>
                    <li><Link href="/register-parking">Publicar parqueadero</Link></li>
                    <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
                    <li><Button text={"Cerrar sesión"} onClick={()=>{logout(); router.push("/");}}/></li>
                </>
                ): (
                <>
                    <li><Link href="/parkings">Inicio</Link></li>
                    <li><Link href="/users">Usuarios</Link></li>
                    <li><Link href="/register-parking">Publicar parqueadero</Link></li>
                    <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
                    <li><Button text={"Cerrar sesión" } onClick={()=>{logout(); router.push("/");}}/></li>
                </>
                )}        
                
            </Header>
            {children}
        </>

    )
}   

export default Layout;