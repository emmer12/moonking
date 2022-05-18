import React from "react";
import { logoRounded,passion } from "../images";
import { HeroContainer, Wrapper, Inner,Action } from "./style";

const Hero = () => {
  return (
    <HeroContainer>
      <Wrapper className="flex">
        <Inner>
          <Wrapper className="left">
            <img src={logoRounded} alt="Logo Rounded" />
          </Wrapper>
          <Wrapper className="right">
            <img src={passion} alt="Logo Rounded" width="100%" />
          </Wrapper>
        </Inner>
      </Wrapper>
      <Action>
        <button className="btn-skew gradient">How To Buy</button>
        <button className="btn-skew white">Buy with USD</button>
      </Action>
    </HeroContainer>
  );
};

export default Hero;
