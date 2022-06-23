import React, {useState} from "react";
import {Button} from "../ButtonElement";
import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg,
} from "./HeroElements";
import video from "../../video/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Przedszkole Montessori</HeroH1>
        <HeroH1>z elementami przedszkola leśnego</HeroH1>
        <HeroP>
        Nasza placówka powstaje z myślą o rodzinach, dla których ważne są wartości płynące z przebywania w bliskim kontakcie z naturą.
        </HeroP>
        <HeroBtnWrapper>
          <Button
              to="services"
              smooth={"true"}
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary={true}
              dark={true}
          >
            Nasza oferta {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
