import React from "react";
import { logo } from "../images";
import { NavContainer, Wrapper } from "./style";
const Nav = ({ setOpen, connect, account }: any) => {
  return (
    <NavContainer>
      <Wrapper className="container">
        <Wrapper className="flex">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>

          <Wrapper className="flex between">
            <Wrapper className="flex menu">
              <div className="items">
                <a href="#disclaimer">Disclaimer</a>
              </div>
              <div className="items">
                <a href="#tokenomics">Tokenomics</a>
              </div>
              {/* <div className="items"><a href="#airdrop">Airdrop</a></div> */}
            </Wrapper>
            <Wrapper className=" flex">
              <div className="d-m-none">
                {" "}
                <button className="btn btn-primary">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    href="https://app.uniswap.org/#/swap?outputCurrency=0xf8325627633a508E57fC726Cdb075F6e4B189695&chain=mainnet"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Trade on Uniswap
                  </a>
                </button>
              </div>
              {/* <div className="d-m-none">
                {" "}
                <button className="btn btn-primary">
                  Trade on PankcakeSwap
                </button>
              </div> */}
              {!account ? (
                <div className="d-m-none">
                  {" "}
                  <button onClick={connect} className="btn btn-primary">
                    Connect
                  </button>
                </div>
              ) : (
                <div onClick={() => setOpen(true)} className="bar">
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
              )}
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </NavContainer>
  );
};

export default Nav;
