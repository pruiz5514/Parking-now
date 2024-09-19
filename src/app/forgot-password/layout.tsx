import Footer from "app/components/Footer/Footer";
import Header from "app/components/Header/Header";
import Button from "app/components/UI/Button/Button";
import Link from "next/link";

const Layout = ({children}: {children:React.ReactNode})=>{
    return(
        <>
            <Header>
                <li><Link href="/">Inicio</Link></li>
            </Header>
            {children}
        </>

    )
}   

export default Layout;