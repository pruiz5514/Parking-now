import Footer from "app/components/Footer/Footer"
import Header from "app/components/Header/Header"
import Button from "app/components/UI/Button/Button"
import Link from "next/link"

const Estacionamientos = () => {
    return(
        <>
            <Header>
                <li><Link href={"/"}>Inicio</Link></li>
                <li>Publicar parqueadero</li>
                <li><Button text={"Cerrar sesión"}/></li>
            </Header>

            <main>
                <aside></aside>
            </main>

            <Footer/>
        </>
    )
}

export default Estacionamientos