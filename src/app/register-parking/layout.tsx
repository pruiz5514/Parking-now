import Header from "app/components/Header/Header"
import Button from "app/components/UI/Button/Button"
import Link from "next/link"

const Layout = ({children}: {children:React.ReactNode})=>{
    return(
        <>
            <Header>
                <li><Link href="/parkings">Inicio</Link></li>
                <li><Link href="/register-parking">Publicar parqueadero</Link></li>
                <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
                <li> <Link href="/"><Button text={"Cerrar sesión"}/></Link></li>
            </Header>
            {children}
        </>

    )
}   

export default Layout;