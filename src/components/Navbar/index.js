import React from "react";
import {FaBars} from "react-icons/fa";
import {MobileIcon, Nav, NavbarContainer, NavItem, NavLinks, NavLogo, NavMenu,} from "./NavbarElements";

const Navbar = ({toggle}) => {
  return (
      <>
        <Nav>
          <NavbarContainer>
            <NavLogo onClick={() => {
              window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
            }}>
              Leśny Fordon</NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to="about">O nas</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="monte">Montessori</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="discover">Galeria</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="services">Oferta zajęć</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="signup">Cennik</NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks to="contact">Kontakt</NavLinks>
            </NavItem>
          </NavMenu>
          {/*<NavBtn>*/}
          {/*  <NavBtnLink to="/signin">Kontakt</NavBtnLink>*/}
          {/*</NavBtn>*/}
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
