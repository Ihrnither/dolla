import React from "react";

import {
  FooterContainer,
  FooterLinksContainer,
  LinksSection,
  LinksH,
  FooterLink,
  FooterLogo,
  FooterP,
  FooterIcons,
  IconWrapper,
  Links,
} from "./FooterElements";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <LinksSection>
          <LinksH>About Us</LinksH>
          <Links>
            <FooterLink to="/signin">How it works</FooterLink>
            <FooterLink to="/signin">Testimonials</FooterLink>
            <FooterLink to="/signin">Careers</FooterLink>
            <FooterLink to="/signin">Investors</FooterLink>
            <FooterLink to="/signin">Terms of Service</FooterLink>
          </Links>
        </LinksSection>
        <LinksSection>
          <LinksH>Videos</LinksH>
          <Links>
            <FooterLink to="/signin">Submit Video</FooterLink>
            <FooterLink to="/signin">Ambassadors</FooterLink>
            <FooterLink to="/signin">Agency</FooterLink>
            <FooterLink to="/signin">Influencer</FooterLink>
          </Links>
        </LinksSection>
        <LinksSection>
          <LinksH>Contact Us</LinksH>
          <Links>
            <FooterLink to="/signin">Contact</FooterLink>
            <FooterLink to="/signin">Support</FooterLink>
            <FooterLink to="/signin">Destinations</FooterLink>
            <FooterLink to="/signin">Sponsorships</FooterLink>
          </Links>
        </LinksSection>
        <LinksSection>
          <LinksH>Social Media</LinksH>
          <Links>
            <FooterLink to="/signin">Instagram</FooterLink>
            <FooterLink to="/signin">Facenook</FooterLink>
            <FooterLink to="/signin">Youtube</FooterLink>
            <FooterLink to="/signin">Twitter</FooterLink>
            <FooterLink to="/signin">Linkedin</FooterLink>
          </Links>
        </LinksSection>
      </FooterLinksContainer>
      <FooterLogo to="home" smooth duration={500} spy exact>
        dolla
      </FooterLogo>
      <FooterP>dolla &copy; 2020 All rights reserved.</FooterP>
      <FooterIcons>
        <IconWrapper>
          <FaFacebook />
        </IconWrapper>
        <IconWrapper>
          <FaInstagram />
        </IconWrapper>
        <IconWrapper>
          <FaYoutube />
        </IconWrapper>
        <IconWrapper>
          <FaTwitter />
        </IconWrapper>
        <IconWrapper>
          <FaLinkedin />
        </IconWrapper>
      </FooterIcons>
    </FooterContainer>
  );
};

export default Footer;
