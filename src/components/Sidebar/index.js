import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarLink,
  SidebarMenu,
  SidebarBtn,
} from "./SidebarElements";

const Sidebar = (props) => {
  return (
    <>
      <SidebarContainer isOpen={props.isOpen} onClick={props.toggle}>
        <Icon onClick={props.toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink
              to="about"
              offset={-80}
              smooth
              duration={500}
              spy
              exact
              onClick={props.toggle}
            >
              About
            </SidebarLink>
            <SidebarLink
              to="discover"
              offset={-80}
              smooth
              duration={500}
              spy
              exact
              onClick={props.toggle}
            >
              Discover
            </SidebarLink>
            <SidebarLink
              to="services"
              offset={-80}
              smooth
              duration={500}
              spy
              exact
              onClick={props.toggle}
            >
              Services
            </SidebarLink>
            <SidebarLink
              to="signup"
              offset={-80}
              smooth
              duration={500}
              spy
              exact
              onClick={props.toggle}
            >
              Sign Up
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtn to="/signin">Sign In</SidebarBtn>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
