import styled from "styled-components";

export const ServicesContainer = styled.div`
  background: #050b0a;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 1200px;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    height: 800px;
  }
`;
export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
`;
export const ServicesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;
  color: #010060;
  border-radius: 10px;
  padding: 30px;
  margin: 0 24px;
  margin-bottom: 24px;
  height: 340px;
  max-width: 494.787px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
  }

  @media screen and (min-width: 768px) {
    width: 250px;
    margin: 0 12px;
  }
`;
export const CardIcon = styled.img`
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
`;
export const CardH2 = styled.h4`
  margin-bottom: 12px;
`;
export const CardP = styled.p``;
