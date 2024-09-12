'use client'
import { BanerStyled, Title, BanerContainer, BanerBackgroundOverlay, PpalSection,Contenedor2, Imagen, ImgHalfStyled, Info2, Img3, ImgHalfStylede, Inf4, ImgHalf } from "./baner-style"

interface InfoProps {
    id: string;
};

const Baner: React.FC<InfoProps> = ({ id }) => {
    return (
        <BanerStyled id={id}>
            <BanerBackgroundOverlay />
            <BanerContainer>
                <Title>Encuentra tu espacio de estacionamiento sin complicaciones, facil y rápido</Title>

                <PpalSection>
                    <Contenedor2>
                        <Imagen>
                            <ImgHalfStyled src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JiM2y1cwiiG0FMbDzrcNXazdsHGZ25hSNQ&s" alt="imagen de 1 conductora" />
                        </Imagen>
                        <Info2>
                            <Img3>
                                <ImgHalfStylede src="https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen de 1 conductora" />
                            </Img3>
                            <Inf4>
                                <ImgHalf>
                                    <ImgHalfStyled src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JiM2y1cwiiG0FMbDzrcNXazdsHGZ25hSNQ&s" alt="imagen de 1 conductora" />
                                </ImgHalf>
                                <ImgHalf>
                                    <ImgHalfStyled src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1JiM2y1cwiiG0FMbDzrcNXazdsHGZ25hSNQ&s" alt="imagen de 1 conductora" />
                                </ImgHalf>
                            </Inf4>
                        </Info2>
                    </Contenedor2>
                </PpalSection>
            </BanerContainer>
        </BanerStyled>
    )
}

export default Baner
