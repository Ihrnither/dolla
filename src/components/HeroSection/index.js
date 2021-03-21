import React, { useState } from "react";

import {
  HeroContainer,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
} from "./HeroElements";
import { Button as HeroButton } from "../ButtonElement";
import Video from "../../videos/video.mp4";

const HeroSection = (props) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer id="home">
        <VideoBg autoPlay muted loop src={Video} type="video/mp4" />
        <HeroContent>
          <HeroH1>Virtual Banking Made Easy</HeroH1>
          <HeroP>
            Sign up for a new account today and recieve $250 in credit towards
            your next payment.
          </HeroP>
          <HeroButton onMouseEnter={onHover} onMouseLeave={onHover}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
          </HeroButton>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
