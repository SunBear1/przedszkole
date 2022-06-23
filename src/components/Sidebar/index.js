import React from "react";
import {CloseIcon, Icon, SidebarContainer, SidebarLink, SidebarMenu, SidebarWrapper,} from "./SidebarElement";

const Sidebar = ({isOpen, toggle}) => {
  return (
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon/>
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
              O nas
            </SidebarLink>
            <SidebarLink to="monte" onClick={toggle}>
              Montessori
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Galeria
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Oferta zajęć
            </SidebarLink>
            <SidebarLink to="signup" onClick={toggle}>
              Cennik
            </SidebarLink>
            <SidebarLink to="contact" onClick={toggle}>
              Kontakt
            </SidebarLink>
          </SidebarMenu>
          {/*<SideBtnWrap>*/}
          {/*  <SidebarRoute to="/signin">Sign In</SidebarRoute>*/}
          {/*</SideBtnWrap>*/}
        </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
