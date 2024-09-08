"use client"
import Footer from "app/components/Footer/Footer"
import Header from "app/components/Header/Header"
import Button from "app/components/UI/Button/Button"
import Select from "app/components/UI/Select/Select"
import '../globals.css'
import Link from "next/link"
import { AsideEsStye, DivEsStyle, FormEsStyle, H2EsStyle, LabelEsStyle, MainEsStyle, MainSectionEsStyle } from "./estacionamientos-style"
import ParkCard from "app/components/ParkCard/ParkCard"

const Estacionamientos = () => {
    return(
        <>
            {/* <Header>
                <li><Link href={"/"}>Inicio</Link></li>
                <li>Publicar parqueadero</li>
                <li><Button text={"Cerrar sesión"}/></li>
            </Header> */}

            <MainEsStyle>
                <AsideEsStye>
                    <FormEsStyle>
                        <H2EsStyle>Ubicación</H2EsStyle>
                        <Select name={"location"} id={"location-select"}>
                            <option value="" selected disabled></option>
                            <option value="popular">Popular</option>
                            <option value="santa-cruz">Santa Cruz</option>
                            <option value="manrique">Manrique</option>
                            <option value="aranjuez">Aranjuez</option>
                            <option value="castilla">Castilla</option>
                            <option value="doce-de-octubre">Doce de Octubre</option>
                            <option value="robledo">Robledo</option>
                            <option value="villa-hermosa">Villa Hermosa</option>
                            <option value="buenos-aires">Buenos Aires</option>
                            <option value="la-candelaria">La Candelaria</option>
                            <option value="laureles-estadio">Laureles-Estadio</option>
                            <option value="la-america">La América</option>
                            <option value="san-javier">San Javier</option>
                            <option value="el-poblado">El Poblado</option>
                            <option value="guayabal">Guayabal</option>
                            <option value="belen">Belén</option>
                        </Select>
                    </FormEsStyle>
                    
                    <FormEsStyle>
                        <H2EsStyle>Tipo de Parquadero</H2EsStyle>
                        <DivEsStyle>
                            <input type="checkbox" id="cubierto-checkbox"/>
                            <LabelEsStyle htmlFor="cubierto-checkbox" >Cubierto</LabelEsStyle>
                        </DivEsStyle>
                        <DivEsStyle>
                            <input type="checkbox" id="descubierto-checkbox"/>
                            <LabelEsStyle htmlFor="descubierto-checkbox">Descubierto</LabelEsStyle>
                        </DivEsStyle>
                    </FormEsStyle>

                    <FormEsStyle>
                        <H2EsStyle>Tipo de vehiculo</H2EsStyle>
                        <DivEsStyle>
                            <input type="checkbox" id="automovil-checkbox" />
                            <LabelEsStyle htmlFor="automovil-checkbox">Automóvil</LabelEsStyle>
                        </DivEsStyle>
                        <DivEsStyle>
                            <input type="checkbox" id = "moto-checkbox"/>
                            <LabelEsStyle htmlFor="moto-checkbox">Moto</LabelEsStyle>
                        </DivEsStyle>
                    </FormEsStyle>

                </AsideEsStye>

                <MainSectionEsStyle>

                    <ParkCard/>
                </MainSectionEsStyle>
            </MainEsStyle>

            {/* <Footer/> */}
        </>
    )
}

export default Estacionamientos