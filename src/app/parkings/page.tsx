"use client"
import Header from "app/components/Header/Header"
import Button from "app/components/UI/Button/Button"
import Select from "app/components/UI/Select/Select"
import '../globals.css'
import Link from "next/link"
import { AsideBackground, AsideEsStye, AsideStyleContainer, CloseAsideButton, DivEsStyle, FilterButton, FormEsStyle, H2EsStyle, LabelEsStyle, MainEsStyle, MainSectionEsStyle } from "./parkings-style"
import ParkCard from "app/components/ParkCard/ParkCard"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { IoClose } from "react-icons/io5"
import { useAppDispatch, useAppSelector } from "app/redux/hooks"
import { closeAside, openAside } from "app/redux/features/filterAsideSlice"
import { useEffect, useState } from "react"
import { ISlots } from "app/types/IParking"
import { getSlots } from "app/services/slots"
import { errorAlert } from "app/utils/alerts"
import { IUserInformation } from "app/types/IUserInformation"
import Cookies from 'js-cookie';


const Parkings = () => {
    const asideState = useAppSelector(state => state.filterAsideReducer.isOpen);
    const userInformation: IUserInformation = useAppSelector(state => state.userReducer.userData);
    const dispatch = useAppDispatch();

    const cookieToken = Cookies.get("token");

    const userToken = userInformation.token;

    const [slots, setSlots] = useState([]);

    useEffect(() => {
        const fetchSlots = async () => {
            try {
                if (cookieToken) {
                    setSlots(await getSlots(cookieToken))
                }
            }
            catch (e) {
                console.log(e);
                errorAlert("No se pudo obtener la información, intente mas tarde");
            }
        }
        fetchSlots();
    }, [])

    return (
        <>
            <Header>
                <li><Link href="/parkings">Inicio</Link></li>
                <li><Link href="/register-parking">Publicar parqueadero</Link></li>
                <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
                <li> <Link href="/"><Button text={"Cerrar sesión"} /></Link></li>
            </Header>

            <MainEsStyle>
                <AsideStyleContainer $isOpen={asideState}>
                    <AsideEsStye $isOpen={asideState}>
                        <CloseAsideButton onClick={() => dispatch(closeAside())}> <IoClose /> </CloseAsideButton>
                        <FormEsStyle>
                            <H2EsStyle>Ubicación</H2EsStyle>
                            <Select name={"location"} id={"location-select"} defaultValue={""}>
                                <option value="" disabled></option>
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
                                <option value="copacabana">Copacabana</option>
                                <option value="bello">Bello</option>
                                <option value="itagui">Itagüí</option>
                                <option value="sabaneta">Sabaneta</option>
                                <option value="envigado">Envigado</option>
                                <option value="la-estrella">La Estrella</option>
                                <option value="caldas">Caldas</option>
                                <option value="girardota">Girardota</option>
                                <option value="barbosa">Barbosa</option>
                            </Select>
                        </FormEsStyle>

                        <FormEsStyle>
                            <H2EsStyle>Tipo de vehiculo</H2EsStyle>
                            <DivEsStyle>
                                <input type="checkbox" id="automovil-checkbox" />
                                <LabelEsStyle htmlFor="automovil-checkbox">Automóvil</LabelEsStyle>
                            </DivEsStyle>
                            <DivEsStyle>
                                <input type="checkbox" id="moto-checkbox" />
                                <LabelEsStyle htmlFor="moto-checkbox">Moto</LabelEsStyle>
                            </DivEsStyle>
                        </FormEsStyle>

                        <FormEsStyle>
                            <H2EsStyle>Tipo de Parquadero</H2EsStyle>
                            <DivEsStyle>
                                <input type="checkbox" id="cubierto-checkbox" />
                                <LabelEsStyle htmlFor="cubierto-checkbox" >Cubierto</LabelEsStyle>
                            </DivEsStyle>
                            <DivEsStyle>
                                <input type="checkbox" id="descubierto-checkbox" />
                                <LabelEsStyle htmlFor="descubierto-checkbox">Descubierto</LabelEsStyle>
                            </DivEsStyle>
                        </FormEsStyle>

                    </AsideEsStye>
                    <AsideBackground $isOpen={asideState}>
                    </AsideBackground>
                </AsideStyleContainer>

                <MainSectionEsStyle>
                    <FilterButton onClick={() => dispatch(openAside())}>
                        Filtrar
                        <HiOutlineAdjustmentsHorizontal />
                    </FilterButton>
                    {
                        slots && slots.length > 0 ? (
                            slots.map((slot: ISlots) => (
                                
                                <ParkCard key={slot.id} href={`/parking-information/${slot.id}/parking-info`} text={"Ver más"} slot={slot} />
                            ))
                        ) : (
                            <p>No hay slots disponibles.</p>
                        )
                    }

                </MainSectionEsStyle>
            </MainEsStyle>
        </>
    )
}

export default Parkings