import React, { useState } from "react";
import "./App.css";

import { Nav, Hero, Footer, Section, Modal } from "./components";
import { Wrapper } from "./components/style";
import { empowering, roadmap, tokenomics_table } from "./images";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./connectors/injected";

function App() {
  const [open, setOpen] = useState(false);
  const [mOpen, setMOpen] = useState(false);
  const { account, activate, deactivate, connector } = useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  const claim = () => {
    alert("Claiming....");
  };

  return (
    <div className="App">
      <Wrapper className={open ? "sidebar added" : "sidebar"}>
        <div onClick={() => setOpen(false)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            className="times"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div>
          <h2>Landing Page</h2>
        </div>
        <div className="items">Disclaimer</div>
        <div className="items">Tokenomics</div>
        <div className="items">Airdrop</div>
        <div className="items">Disclaimer</div>
      </Wrapper>
      <Nav setOpen={setOpen} />
      <Hero />

      <div id="airdrop">
        <Section title="Rewards" bg="black">
          <button className="btn btn-primary" onClick={() => setMOpen(true)}>
            Claim Reward
          </button>
        </Section>
      </div>

      <Section title="Target Goal" bg="#cf2523">
        <p>
          $MOONKING was created in the spirit of giving. 10k $PLSX Sacrificers
          chose to claim their $MOONKING. We are here to Give, Grow $MOONKING,
          and Support Pulsechain awareness.
        </p>
        <p>
          Pulsechain's long term success and the quest for financial freedoms
          will always rest at the feet of the youth. Collegiate and amateur
          athletes are striving and asking for more financial opportunities.
          $MOONKING was one of those athletes. We intend to build a coin and
          community that rewards the best competitors in their respective sports
          with $PLS and relative ecosystem coins such as $PLSX - $PULSEDOGE -
          $MORE - $MINT ..... and of course......$HEX Stakes.
        </p>
        <p>
          There are thousands of college football players that would love to
          have their game or performance in the spotlight - that would love to
          be rewarded with a 5555 $HEX Stake.
        </p>
        <p>We are here to provide that opporunity.</p>
        <p>
          We are going to the Moon, and we intend to take other Pulsechain coins
          with us.
        </p>

        <h4>We are $MOONKING.</h4>
      </Section>

      <div className="container" style={{ padding: "100px 0px" }}>
        <img src={empowering} alt="Empowering table" width="100%" />
      </div>

      <div id="tokenomics">
        <Section title="Tokenomics" subtitle="" bg="rgba(10,10,10,6)">
          <br />
          <img src={tokenomics_table.default} alt="tokenomics table" />
        </Section>
      </div>

      <div className="disclaimer">
        <div className="header-disclaimer">
          <h4>Disclaimer</h4>
          <h2>What else do you need to know?</h2>
          <br />
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quod
            porro eos non aut ad
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quod
            porro eos non aut ad quis repellendus vero{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            incidunt corporis, nihil illo dolor quibusdam fuga vitae temporibus
            repellendus et aut nemo autem itaque rem fugit libero, quasi
            aspernatur non.{" "}
          </p>
        </div>
      </div>

      <Section title="Roadmap" bg="rgb(85 13 12 / 50%)">
        <br />
        <br />
        <img width="100%" src={roadmap} alt="Readmap" />
      </Section>

      <Modal
        open={mOpen}
        close={() => setMOpen(false)}
        account={account}
        handleConnect={() => connect()}
        handleClaim={() => claim()}
      />
      <Footer />
    </div>
  );
}

export default App;
