import React from "react";
import {BsTelephone} from "react-icons/bs"
import {IoMdPin} from "react-icons/io"
import {SiFacebook} from "react-icons/si";

import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Lokalizacja</FooterLinkTitle>
              <FooterLink to="/"> ul. Księdza Henryka Szumana 9</FooterLink>
              <FooterLink to="/"> 85-796 Bydgoszcz</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Kontakt</FooterLinkTitle>
              <FooterLink to="/"> 530 373 377</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/"> Facebook</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo onClick={() => {
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}>Leśny Fordon</SocialLogo>
            <WebsiteRights>
              Leśny Fordon &copy; {new Date().getFullYear()} Wszelkie prawa zastrzeżone
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink herf="/" target="_blank" aria-label="Facebook">
                <SiFacebook/>
              </SocialIconLink>
              <SocialIconLink herf="/" target="_blank" aria-label="Instagram">
                <BsTelephone/>
              </SocialIconLink>
              <SocialIconLink herf="/" target="_blank" aria-label="Twitter">
                <IoMdPin/>
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
