import React, { useState } from "react";
import "./App.css";

import { Nav, Hero, Footer, Section, Modal } from "./components";
import { Wrapper } from "./components/style";

function App() {
  const [open, setOpen] = useState(false);
  const [mOpen, setMOpen] = useState(false);

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
        <Section title="Airdrop" bg="black">
          <button className="btn btn-primary" onClick={() => setMOpen(true)}>
            Claim Reward
          </button>
        </Section>
      </div>

      <Section title="Out Goal" subtitle="Our Goal" bg="#cf2523">
        <p>
          In the world of crypto, dog coins and meme coins are the gateway to
          the mainstream. You have Doge Coin which has been a viral sensation
          for the last years, with even the likes of Elon Musk supporting it.
          Then you have #Shiba Inu, which in 2021 had the greatest single return
          on investment in history - doing over a 1,000,00x in a single year.
          That’s why we created Marshall, a lovable dog that is designed to help
          out fighters with an extra source of income. We are combining the
          world of MMA and Meme coins to do something good in the world, whereas
          most other projects use the taxes for pointless marketing that makes
          the rich richer. We are gifting fighters who we believe deserve it
          more than anyone with what they put their bodies through for our
          entertainment.
        </p>
        <h4>
          We are Marshall. We are #FightingForFighters. If you appreciate us,
          don’t forget to drop a #ThankYouMarshall
        </h4>
      </Section>

      <div id="tokenomics">
        <Section title="Tokenomics" subtitle="" bg="rgba(10,10,10,6)">
          <h4>
            We are Marshall. We are #FightingForFighters. If you appreciate us,
            don’t forget to drop a #ThankYouMarshall
          </h4>
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

      <Modal
        open={mOpen}
        close={() => setMOpen(false)}
        account={"0x631f66695fF94ACDd804dFcdad1371BC61447e453"}
      />
      <Footer />
    </div>
  );
}

export default App;
