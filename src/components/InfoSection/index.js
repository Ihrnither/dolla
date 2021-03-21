import React from "react";
import {
  InfoContainer,
  InfoSectionContainer,
  TopLine,
  HeadLine,
  Description,
  InfoImage,
} from "./InfoElements";
import { Button } from "../ButtonElement";

const InfoSection = (props) => {
  return (
    <InfoSectionContainer id={props.id} bgLight={props.bgLight}>
      <InfoContainer imageStart={props.imageStart}>
        <TopLine>{props.topLine}</TopLine>
        <HeadLine>{props.headLine}</HeadLine>
        <Description>{props.description}</Description>
        <Button dark={props.btnDark}>{props.btnText}</Button>
      </InfoContainer>
      <InfoImage src={props.image} alt={props.imageAlt} />
    </InfoSectionContainer>
  );
};

export default InfoSection;
