import Image from "next/image";
import Button from "../UI/Button/Button";

const Header = ()=> {
    return(
        <header>
            <section>
                <Image src="/img/LOGO1.png" alt="logo-principal" width={100} height={100}/>
            </section>
            <nav>
                <ul>
                    <li> <a href="">Inicio</a> </li>
                    <li> <a href="">Beneficios</a> </li>
                    <li> <a href="">Información</a> </li>
                    <li> <a href="">Contactanos</a> </li>
                    <li> <Button text={"Registrate"} /> </li>
                    <li> <Button text={"Iniciar sesión"} /></li>
                </ul>
            </nav>
        </header>
    )
}
 export default Header;