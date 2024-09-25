"use client"
import Header from "app/components/Header/Header"
import Button from "app/components/UI/Button/Button"
import Select from "app/components/UI/Select/Select"
import '../globals.css'
import Link from "next/link"
import { AsideBackground, AsideEsStye, AsideStyleContainer, CloseAsideButton, DivEsStyle, FilterButton, FormEsStyle, H2EsStyle, LabelEsStyle, MainEsStyle, MainSectionEsStyle, PaginationButtonContainer, PaginationContainer, ParkingCardsContainer } from "./parkings-style"
import ParkCard from "app/components/ParkCard/ParkCard"
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"
import { IoChevronBackOutline, IoChevronForwardOutline, IoClose } from "react-icons/io5"
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
import { getBookinginProgressDriver } from "app/services/booking";
import { IBookingActive } from "app/types/IBooking";
import { useRouter } from 'next/navigation'

const Parkings = () => {
    const asideState = useAppSelector(state => state.filterAsideReducer.isOpen);
    const userInformation: IUserInformation = useAppSelector(state => state.userReducer.userData);
    const dispatch = useAppDispatch();
    const router = useRouter();

    const cookieToken = Cookies.get("token");
    
    const userToken = userInformation.token;
    
    const admin = Cookies.get("email");
    
    const cardsCuantity = 6;
    
    const [loading, setLoading] = useState(true); 
    const [pagination, setPagination] = useState(0); 
    const [slots, setSlots] = useState([]);
    const [priceOrder, setPriceOrder] = useState("");
    const [commune, setCommune] = useState("");
    const [vehicle, setVehicle] = useState("");
    const [slotType, setSlotType] = useState("");
    
    const nextButton = ()=>{
        const quantity = pagination + 6;
        setPagination(quantity);
        console.log(pagination);
    }
    
    const backButton = ()=>{
        const quantity = pagination - 6;
        setPagination(quantity);
        console.log(pagination);
    }
    
    const priceHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setPriceOrder(event.target.value);
        console.log(priceOrder);
    };
    
    const communeHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCommune(event.target.value);
    };
    
    const vehicleHandleChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        setVehicle(event.target.value);
    };
    
    const slotTypeHandleChange =(event: React.ChangeEvent<HTMLInputElement>) => {
        setSlotType(event.target.value);
    };    
    
    const [bookingActiveInfo, setBookingActiveInfo] = useState<IBookingActive>();
    const [BookingInProgress, setBookingInProgress] = useState<boolean>(false);
    

    useEffect(() => {
        const checkBookingInProgress = async () => {
            try {
                if (cookieToken) {
                    const data = await getBookinginProgressDriver(cookieToken);
                    if (data) {
                        setBookingInProgress(true);
                        setBookingActiveInfo(data);
                    } else {
                        setBookingInProgress(false);
                    }
                } 
            } catch (error) {
                console.error("No hay reserva en progreso:", error);
                setBookingInProgress(false);
            }
        };
        checkBookingInProgress();
    }, [cookieToken]);

    const handleBookingButtonClick = () => {
        if (BookingInProgress && bookingActiveInfo) {
            const { slotId, bookingId } = bookingActiveInfo;
            router.push(`/parking-information/${slotId}/reserved-parking/${bookingId}/end-reserved`);
        } else {
            router.push("/parkings");
        }
    };
    
    useEffect(() => {
        const fetchSlots = async () => {
            setLoading(true);
            try {
                if (cookieToken) {
                    setSlots(await filterSlots(cookieToken,`take=${cardsCuantity}`))
                }
            }
            catch (e) {
                console.log(e);
                errorAlert("No se pudo obtener la información, intente mas tarde");
            }
            finally{
                setLoading(false);
            }
        }
        fetchSlots();
    }, [])


    useEffect(() => {
        const fetchFilterSlots = async () => {
            if (cookieToken) {
                try {
                    let filterQueries = [`take=${cardsCuantity}`];
                    if (commune) filterQueries.push(`commune=${commune}`);
                    if (vehicle) filterQueries.push(`vehicleType=${vehicle}`);
                    if (slotType) filterQueries.push(`isCovered=${slotType}`);
                    if (priceOrder) filterQueries.push(`order=${priceOrder}`);
                    if (pagination) filterQueries.push(`skip=${pagination}`);

                    if (filterQueries.length > 0) {
                        const queryString = filterQueries.join("&");
                        const filteredSlots = await filterSlots(cookieToken, queryString);
                        setSlots(filteredSlots);
                    } 

                } catch (e) {
                    console.log(e);
                }
            }
        };
        fetchFilterSlots();
    }, [commune, vehicle, slotType, cookieToken, priceOrder, pagination]);

    return (
        <>
            <Header>
                {admin !== "admin@example.com" ? (
                <>
                    <li>{BookingInProgress && (<Button text="Tu reserva"onClick={handleBookingButtonClick}/>)}</li>
                    <li><Link href="/parkings">Inicio</Link></li>
                    <li><Link href="/register-parking">Publicar parqueadero</Link></li>
                    <li><Link href="/my-parkings">Mis parqueaderos</Link></li>
                    <li><Link href="/"><Button text={"Cerrar sesión"} /></Link></li>
                </>
                ): (
                <>
                    <li><Link href="/parkings">Inicio</Link></li>
                    <li><Link href="/users">Usuarios</Link></li>
                    <li><Link href="/"><Button text={"Cerrar sesión"} /></Link></li>
                </>
                )}        
                
            </Header>

            <MainEsStyle>
                <AsideStyleContainer $isOpen={asideState}>
                    <AsideEsStye $isOpen={asideState}>
                        <CloseAsideButton onClick={() => dispatch(closeAside())}> <IoClose /> </CloseAsideButton>
                        <FormEsStyle>
                            <H2EsStyle>Organizar por precio</H2EsStyle>
                            <Select name={"price"} id={"price-select"} defaultValue={""} onChange={priceHandleChange} >
                                <option value="" disabled></option>
                                <option value="ASC">Menor precio</option>
                                <option value="DESC">Mayor precio</option>
                            </Select>
                        </FormEsStyle>
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
                    <AsideBackground $isOpen={asideState} onClick={() => dispatch((closeAside()))}/>
                </AsideStyleContainer>

                <MainSectionEsStyle>
                    <FilterButton onClick={() => dispatch(openAside())}>
                        Filtrar
                        <HiOutlineAdjustmentsHorizontal />
                    </FilterButton>
                    <ParkingCardsContainer>
                        { loading ? (
                            <Spinner/>
                        ):
                            slots && slots.length > 0 ? (
                                slots.map((slot: ISlots) => (
                                    <ParkCard key={slot.id} href={`/parking-information/${slot.id}/parking-info`} text={"Ver más"} slot={slot} />
                                ))
                            ) : (
                                <p>No hay slots disponibles.</p>
                            )
                        }
                    </ParkingCardsContainer>

                    <PaginationContainer>
                        <PaginationButtonContainer>
                            {pagination>=cardsCuantity ?(
                                <Button text={(<IoChevronBackOutline/>)} onClick={backButton}/> 
                            ): ""}
                            {slots.length===cardsCuantity ? (
                                <Button text={(<IoChevronForwardOutline />)} onClick={nextButton}/>
                            ):""}
                        </PaginationButtonContainer>        
                    </PaginationContainer>

                </MainSectionEsStyle>

            </MainEsStyle>
        </>
    )
}

export default Parkings