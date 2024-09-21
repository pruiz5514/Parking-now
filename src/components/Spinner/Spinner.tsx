import './Spinner.css'
import Image from "next/image"

const Spinner = ()=> {
    return(
        <div className="spinner-container">
            <Image className='img' src="/img/LogoOrange.png" alt="logo-principal" width={190} height={190} layout="fixed" />
        </div>
    )
}

export default Spinner;