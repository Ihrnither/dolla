import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const FooterContainer = styled.div`
  position: sticky;
  background: #101522;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 48px 24px 12px;
`;
export const FooterLinksContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
`;
export const LinksSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinksH = styled.h4`
  margin: 12px 0;
`;
export const FooterLink = styled(LinkR)`
  color: white;
  text-decoration: none;
  font-size: 14px;
  margin-bottom: 6px;

  :hover {
    color: #01bf71;
  }
`;
export const FooterLogo = styled(LinkS)`
  color: #fff;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin: 48px 0 12px;
  cursor: pointer;
`;
export const FooterP = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
`;
export const FooterIcons = styled.div`
  font-size: 2rem;
  display: flex;
`;

export const IconWrapper = styled.div`
  margin: 0 10px;
  cursor: pointer;
  :hover {
    color: #01bf71;
  }
`;
