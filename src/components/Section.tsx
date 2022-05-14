import React from "react";
import styled from "styled-components";

const Header = styled.div`
  h1 {
    font-size: 48px;
    color: #fff;
    font-weight: 900;
    margin-bottom: 10px;
    text-shadow: 0 0 20px hsl(0deg 0% 100% / 50%);

    @media (max-width:640px){
    font-size: 32px;

  }
  }

  h4 {
    text-transform: uppercase;
    font-size: 16px;
    color: #fff;
    font-weight: 700;
  }

`;
const Body = styled.div`
  color: #fff;

  p {
    margin-top: 2rem;
    line-height: 2rem;
    font-size: 1.25rem;
  }
  h4 {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 2rem;

  }

  @media (max-width:640px){
      padding:0px 20px
  }
`;
const Inner = styled.div`
  max-width: 48rem;
  margin: auto;
`;

interface ISection {
  title: string;
  subtitle?: string;
  children: any;
  bg: string;
}
const Section = ({ title, subtitle, children, bg }: ISection) => {
  const SectionWrapper = styled.div`
    background: ${bg || "green"};
    text-align: center;
    padding: 100px 0px;
  `;
  return (
    <SectionWrapper>
      <Inner>
        <Header>
          {subtitle && <h4>{subtitle}</h4>}
          <h1>{title}</h1>
        </Header>

        <Body>{children}</Body>
      </Inner>
    </SectionWrapper>
  );
};

export default Section;
