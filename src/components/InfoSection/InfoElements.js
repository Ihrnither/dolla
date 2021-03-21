import styled from "styled-components";

export const InfoSectionContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 36px 24px;
  height: 860px;
  background: ${(props) => (props.bgLight ? "white" : "#050B0A")};
  color: ${(props) => (props.bgLight ? "black" : "white")};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
    padding: 24px 10em;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    order: ${(props) => props.imageStart && "1"};
  }
`;

export const TopLine = styled.p`
  text-transform: uppercase;
  color: #01bf71;
  margin-bottom: 12px;
`;

export const HeadLine = styled.h1`
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font-size: 18px;
  line-height: 24px;
`;

export const InfoImage = styled.img`
  width: 100%;
  padding: 24px;

  @media screen and (min-width: 768px) {
    width: 60%;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;
