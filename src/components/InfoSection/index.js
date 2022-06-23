import React from "react";
import {Button} from "../ButtonElement";
import {
  BtnWrap,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrappeer,
  TopLine,
} from "./InfoElements";

const InfoSection = ({
  lightBg,
  lightText,
  id,
  imgStart,
                       topLine,
                       headline,
                       darkText,
                       description,
                       buttonLabel,
                       img,
                       alt,
                       primary,
                       dark,
                       dark2,
                       direction,
                       big_picture,
                     }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrappeer>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to={direction}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrappeer>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img big_picture={big_picture} src={img} alt={alt}/>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
