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
import { filterSlots } from "app/services/filterSlots"
import Spinner from "app/components/Spinner/Spinner"

const Parkings = () => {
    const asideState = useAppSelector(state => state.filterAsideReducer.isOpen);
    const userInformation: IUserInformation = useAppSelector(state => state.userReducer.userData);
    const dispatch = useAppDispatch();

    const cookieToken = Cookies.get("token");

    const userToken = userInformation.token;

    const [slots, setSlots] = useState([]);
    const [commune, setCommune] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [slotType, setSlotType] = useState("");

    const communeHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCommune(event.target.value);
    };

    const vehicleHandleChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        setVehicle(event.target.value);
    };

    const slotTypeHandleChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        setSlotType(event.target.value);
    };    

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


    useEffect(()=>{
        const fetchFilterSlots = async()=>{
            if(cookieToken){
                try{
                    if(commune) setSlots(await filterSlots(cookieToken,`commune=${commune}`));
                    if(vehicle) setSlots(await filterSlots(cookieToken,`vehicleType=${vehicle}`));
                    if(slotType) setSlots(await filterSlots(cookieToken,`isCovered=${slotType}`));
                    if(commune && vehicle) setSlots(await filterSlots(cookieToken,`commune=${commune}&vehicleType=${vehicle}`));
                    if(commune && slotType) setSlots(await filterSlots(cookieToken,`commune=${commune}&isCovered=${slotType}`));
                    if(vehicle && slotType) setSlots(await filterSlots(cookieToken,`vehicleType=${vehicle}&isCovered=${slotType}`));
                    if(commune && vehicle && slotType) setSlots(await filterSlots(cookieToken,`commune=${commune}&vehicleType=${vehicle}&isCovered=${slotType}`));
                }catch(e){
                    console.log(e);
                }
            }
        }
        fetchFilterSlots();
    },[commune, vehicle, slotType])

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
                            <Select name={"location"} id={"location-select"} defaultValue={""} onChange={communeHandleChange} >
                                <option value="" disabled></option>
                                <option value={1}>Popular</option>
                                <option value={2}>Santa Cruz</option>
                                <option value={3}>Manrique</option>
                                <option value={4}>Aranjuez</option>
                                <option value={5}>Castilla</option>
                                <option value={6}>Doce de Octubre</option>
                                <option value={7}>Robledo</option>
                                <option value={8}>Villa Hermosa</option>
                                <option value={9}>Buenos Aires</option>
                                <option value={10}>La Candelaria</option>
                                <option value={11}>Laureles-Estadio</option>
                                <option value={12}>La América</option>
                                <option value={13}>San Javier</option>
                                <option value={14}>El Poblado</option>
                                <option value={15}>Guayabal</option>
                                <option value={16}>Belén</option>
                                <option value={17}>Copacabana</option>
                                <option value={18}>Bello</option>
                                <option value={19}>Itagüí</option>
                                <option value={20}>Sabaneta</option>
                                <option value={21}>Envigado</option>
                                <option value={22}>La Estrella</option>
                                <option value={23}>Caldas</option>
                                <option value={24}>Girardota</option>
                                <option value={25}>Barbosa</option>
                            </Select>
                        </FormEsStyle>

                        <FormEsStyle>
                            <H2EsStyle>Tipo de vehiculo</H2EsStyle>
                            <DivEsStyle>
                                <input type="radio" id="automovil-radio" name="tipo-vehiculo" value={1} onChange={vehicleHandleChange}/>
                                <LabelEsStyle htmlFor="automovil-radio">Automóvil</LabelEsStyle>
                            </DivEsStyle>
                            <DivEsStyle>
                                <input type="radio" id="moto-radio" name="tipo-vehiculo" value={2} onChange={vehicleHandleChange}/>
                                <LabelEsStyle htmlFor="moto-radio">Moto</LabelEsStyle>
                            </DivEsStyle>
                        </FormEsStyle>

                        <FormEsStyle>
                            <H2EsStyle>Tipo de Parquadero</H2EsStyle>
                            <DivEsStyle>
                                <input type="radio" id="cubierto-radio" name="tipo-celda" value={1} onChange={slotTypeHandleChange}/>
                                <LabelEsStyle htmlFor="cubierto-radio" >Cubierto</LabelEsStyle>
                            </DivEsStyle>
                            <DivEsStyle>
                                <input type="radio" id="descubierto-radio" name="tipo-celda" value="false" onChange={slotTypeHandleChange}/>
                                <LabelEsStyle htmlFor="descubierto-radio">Descubierto</LabelEsStyle>
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