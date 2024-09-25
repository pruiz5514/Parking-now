"use client"
import Header from "app/components/Header/Header"
import Button from "app/components/UI/Button/Button"
import { logout } from "app/utils/logout"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Layout = ({children}: {children:React.ReactNode})=>{
    const router = useRouter();
    return(
        <>
            <Header>
                <li><Link href="/parkings">Inicio</Link></li>
                <li><Link href="/users">Usuarios</Link></li>
                <li><Link href="/register-parking">Publicar parqueadero</Link></li>
                <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
                <li><Button text={"Cerrar sesión" } onClick={()=>{logout(); router.push("/");}}/></li>
            </Header>
            {children}
        </>

    )
}   

export default Layout;