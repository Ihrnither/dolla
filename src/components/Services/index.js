import React from "react";

import {
  ServicesContainer,
  ServicesH1,
  CardH2,
  CardP,
  ServicesWrapper,
  Card,
  CardIcon,
} from "./ServicesElements";

import icon1 from "../../images/icon-1.svg";
import icon2 from "../../images/icon-2.svg";
import icon3 from "../../images/icon-3.svg";

const Services = (props) => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <Card>
          <CardIcon src={icon1} alt="dolla" />
          <CardH2>Reduce Expenses</CardH2>
          <CardP>
            We help reduce your fees and increase your overall revenue.
          </CardP>
        </Card>
        <Card>
          <CardIcon src={icon2} alt="dolla" />
          <CardH2>Virtual Offices</CardH2>
          <CardP>
            You can access our platform online anywhere in the world.
          </CardP>
        </Card>
        <Card>
          <CardIcon src={icon3} alt="dolla" />
          <CardH2>Premium Benefits</CardH2>
          <CardP>
            Unlock our special membership card that returns 5% cash back.
          </CardP>
        </Card>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
