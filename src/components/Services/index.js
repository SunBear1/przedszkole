import React from "react";
import jezyki_icon from "../../images/oferta-zajec-jezyki.svg";
import adaptacja_icon from "../../images/oferta-zajec-adaptacja.svg";
import kulinaria_icon from "../../images/oferta-zajec-kulinaria.svg";
import fizjoterapia from "../../images/oferta-zajec-fizjoterapia.svg";
import {
    ServiceCard,
    ServicesContainer,
    ServicesH1,
    ServicesH2,
    ServicesIcon,
    ServicesNote,
    ServicesP,
    ServicesWrapper,
    Subtitle,
} from "./ServicesElements";
import {Link} from "react-scroll";

const index = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Oferta zajęć</ServicesH1>
            <Subtitle>Na zajęcia dodatkowe jest możliwość zapisania dzieci spoza placówki</Subtitle>
            <ServicesWrapper>
                <Link to="signup" smooth={"true"}>
                    <ServiceCard>
                        <ServicesIcon src={jezyki_icon}/>
                        <ServicesH2>Język angielski</ServicesH2>
                        <ServicesP>
                            115 zł miesięcznie
                        </ServicesP>
                        <ServicesNote>*Przy wyborze dwóch języków – trzeci najtańszy gratis!</ServicesNote>
                    </ServiceCard>
                </Link>
                <Link to="signup" smooth={"true"}>
                    <ServiceCard>
                        <ServicesIcon src={jezyki_icon}/>
                        <ServicesH2>Język niemiecki</ServicesH2>
                        <ServicesP>
                            130 zł miesięcznie
                        </ServicesP>
                        <ServicesNote>*Przy wyborze dwóch języków – trzeci najtańszy gratis!</ServicesNote>
                    </ServiceCard>
                </Link>
                <Link to="signup" smooth={"true"}>
                    <ServiceCard to="signup">
                        <ServicesIcon src={jezyki_icon}/>
                        <ServicesH2>Język hiszpański</ServicesH2>
                        <ServicesP>
                            150 zł miesięcznie
                        </ServicesP>
                        <ServicesNote>*Przy wyborze dwóch języków – trzeci najtańszy gratis!</ServicesNote>
                    </ServiceCard>
                </Link>
                <Link to="signup" smooth={"true"}>
                    <ServiceCard>
                        <ServicesIcon src={adaptacja_icon} to="signup"/>
                        <ServicesH2>Adaptacja</ServicesH2>
                        <ServicesP>
                            10 zł/h - pobyt na terenie przedszkola po wcześniejszym uzgodnieniu
                        </ServicesP>
                    </ServiceCard>
                </Link>
                <Link to="signup" smooth={"true"}>
                    <ServiceCard>
                        <ServicesIcon src={kulinaria_icon} to="signup"/>
                        <ServicesH2>Warsztaty kulinarne</ServicesH2>
                        <ServicesP>
                            15 zł za jedne warsztaty w tym skłaniki potrzebne na zajęcia
                        </ServicesP>
                    </ServiceCard>
                </Link>
                <Link to="signup" smooth={"true"}>
                    <ServiceCard>
                        <ServicesIcon src={fizjoterapia} to="signup"/>
                        <ServicesH2>Indywidualna fizjoterapia</ServicesH2>
                        <ServicesP>
                            150 zł - Ćwiczenia z fizjoterapeutą dostosowane do indywidualnych potrzeb dziecka
                        </ServicesP>
                    </ServiceCard>
                </Link>
            </ServicesWrapper>
    </ServicesContainer>
  );
};

export default index;
