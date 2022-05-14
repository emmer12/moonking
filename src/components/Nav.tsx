import React from "react";
import { NavContainer, Wrapper } from "./style";

const Nav = ({setOpen}:any) => {

  return (
    <NavContainer>
      <Wrapper className="container">
        <Wrapper className="flex">
          <div>
            <h2>Logo</h2>
          </div>

          <Wrapper className="flex between">
            <Wrapper className="flex menu">
              <div className="items"><a href="#disclaimer">Disclaimer</a></div>
              <div className="items"><a href="#tokenomics">Tokenomics</a></div>
              <div className="items"><a href="#airdrop">Airdrop</a></div>
            </Wrapper>
            <Wrapper className="flex">
              <div>
                {" "}
                <button className="btn btn-primary">Trade on Uniswap</button>
              </div>
              <div>
                {" "}
                <button className="btn btn-primary">
                  Trade on PankcakeSwap
                </button>
              </div>
              <div onClick={() => setOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  style={{
                    height: 36,
                    width: 36,
                    marginTop: 30,
                    cursor: "pointer",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </div>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </NavContainer>
  );
};

export default Nav;
