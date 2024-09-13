'use client'
import { BanerStyled, Title, BanerBackgroundOverlay, Imagen, ImgHalfStyled, Info2, Img3, ImgHalfStylede, Inf4, ImgHalf } from "./baner-style"

interface InfoProps {
    id: string;
};

const Baner: React.FC<InfoProps> = ({ id }) => {
    return (
        <BanerStyled id={id}>
            <BanerBackgroundOverlay />
            <Title>Encuentra tu espacio de estacionamiento sin complicaciones, facil y rápido</Title>
            <Imagen>
                <ImgHalfStyled src="https://i.pinimg.com/originals/6b/b3/4d/6bb34d037ad77b2097cb9712bf543cd2.jpg" alt="imagen1" />
            </Imagen>
            <Info2>
                <Img3>
                    <ImgHalfStylede src="https://guideposts.org/wp-content/uploads/2015/08/traffic_jam_mw_marquee.jpg.webp" alt="imagen2" />
                </Img3>
                <Inf4>
                    <ImgHalf>
                        <ImgHalfStyled src="https://images.adsttc.com/media/images/58ce/ae96/e58e/ce29/c100/0207/slideshow/photograph_Saint_Luc_Lieven_van_Landschoot(44).jpg?1489940111" alt="imagen3" />
                    </ImgHalf>
                    <ImgHalf>
                        <ImgHalfStyled src="https://i.pinimg.com/originals/a7/30/b1/a730b1a3cc15432ab3ea026ad19d1217.jpg" alt="imagen4" />
                    </ImgHalf>
                </Inf4>
            </Info2>
        </BanerStyled>
    )
}

export default Baner
