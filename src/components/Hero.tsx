import { useState } from "react";
import { logoRounded, passion, Header } from "../images";
import { HeroContainer, Wrapper, Inner, Action } from "./style";

const Hero = ({ claim }: any) => {
  /* <button className="btn btn-primary" onClick={() => setMOpen(true)}>
              Claim $MoonKing
            </button> */
  return (
    <HeroContainer>
      <Wrapper className="flex">
        <Inner>
          <Wrapper className="left">
            <img src={logoRounded} alt="Logo Rounded" />
          </Wrapper>
          <Wrapper className="right">
            <img src={Header} alt="Logo Rounded" width="100%" />
          </Wrapper>
        </Inner>
      </Wrapper>
      <Action>
        <button onClick={() => claim(true)} className="btn-skew gradient">
          CLAIM $MOONKING
        </button>
        {/* <button className="btn-skew white">Buy $MOONKING</button> */}
      </Action>
    </HeroContainer>
  );
};

export default Hero;
