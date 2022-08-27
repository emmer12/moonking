import React, { useState, useRef, useEffect } from "react";
import "./App.css";

import { Nav, Hero, Footer, Section, Modal } from "./components";
import { Wrapper } from "./components/style";
import {
  empowering,
  roadmap,
  tokenomics_table,
  Middle,
  Middle2,
  Tokenomics,
} from "./images";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./connectors/injected";
import {
  useGetUserLazyQuery,
  GetUserDocument,
  useCreateUserMutation,
  User,
  useUpdateUserMutation,
} from "./generated/graphql-frontend";
import { claim_contract } from "./blockchain/index";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100vh;
  width: 100vh;
  background-color: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  z-index: 199999;
`;
const Loader = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function App() {
  const [open, setOpen] = useState(false);
  const [mOpen, setMOpen] = useState(false);
  const { account, activate, deactivate, connector, library } = useWeb3React();

  const [getUser, { data, loading, error }] = useGetUserLazyQuery();
  const [createUserMutation, user_data] = useCreateUserMutation();
  const [updateUserMutation, updateData] = useUpdateUserMutation();
  const [user, setUser] = useState<User>();
  const [txnLoading, setTxnLoading] = useState(false);

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  const claim = async () => {
    try {
      if (user && user?.eligible && !user?.claimed) {
        setMOpen(false);
        setTxnLoading(true);
        const txnHash = await claim_contract(library.provider, user);
        if (txnHash) {
          updateUserMutation({
            variables: {
              account: account ?? "", // value for 'account'
              claim_hash: txnHash ?? "", // value for 'claim_hash'
            },
            refetchQueries: [{ query: GetUserDocument }],
            // update: (cache: any, { data: { updateUser } }: any) => {
            //   cache.writeQuery({
            //     query: GetUserDocument,
            //     id: cache.identify(user),
            //     data: {
            //       ...user,
            //       claimed: true,
            //       claim_hash: txnHash,
            //     },
            //     variable: {
            //       account,
            //     },
            //   });
            //   setTxnLoading(false);
            //   setUser(data?.getUser);

            // },
          });
        }
      }
      return;
    } catch (e: any) {
      setTxnLoading(false);
      if (e.code === 4001) console.log(e?.message);
      else console.log("Catched error: >>", e?.error?.message);
    }
  };

  useEffect(() => {
    if (account) {
      getUser({
        variables: {
          account,
        },
      });
    }
    console.log({ data });
    if (!user && data?.getUser) {
      setUser(data?.getUser as User);
    }
    setUser(data?.getUser as User);
    if (account && !user && !data?.getUser) {
      createUserMutation({ variables: { account } });
    }
    console.log({ user });
  }, [account, data?.getUser, updateData.data]);

  return (
    <div className="App">
      {txnLoading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}

      <>
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
          {/* <div className="items">
            <a style={{ color: "#fff" }} href="#airdrop">
              Airdrop
            </a>
          </div> */}
          <div className="items">
            <a style={{ color: "#fff" }} href="#tokenomics">
              Tokenomics
            </a>
          </div>
          <div className="items">
            <a style={{ color: "#fff" }} href="#disclaimer">
              Disclaimer
            </a>
          </div>
        </Wrapper>
        <Nav {...{ setOpen, connect, account }} />
        <Hero {...{ claim: setMOpen }} />

        {/* <div id="airdrop">
          <Section title="Claim $MoonKing" bg="black">
            <button className="btn btn-primary" onClick={() => setMOpen(true)}>
              Claim $MoonKing
            </button>
          </Section>
        </div> */}

        <Section title="Target Goal" bg="rgba(10,10,10,6)">
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
            community that rewards the best competitors in their respective
            sports with $PLS and relative ecosystem coins such as $PLSX -
            $PULSEDOGE - $MORE - $MINT ..... and of course......$HEX Stakes.
          </p>
          <p>
            There are thousands of college football players that would love to
            have their game or performance in the spotlight - that would love to
            be rewarded with a 5555 $HEX Stake.
          </p>
          <p>We are here to provide that opporunity.</p>
          <p>
            We are going to the Moon, and we intend to take other Pulsechain
            coins with us.
          </p>

          <h4>We are $MOONKING.</h4>
        </Section>

        <div className="container" style={{ padding: "100px 0px" }}>
          <img src={Middle} alt="Empowering table" width="100%" />
          <img src={Middle2} alt="Empowering table" width="100%" />
        </div>

        <div id="tokenomics">
          <Section title="" subtitle="" bg="transparent">
            <br />
            <img src={Tokenomics} height="300" alt="tokenomics table" />
          </Section>
        </div>

        <div id="disclaimer" className="disclaimer">
          <div className="header-disclaimer">
            <h4>Disclaimer</h4>
            <h2>What else do you need to know?</h2>
            <br />
          </div>

          <div>
            <p>
              By trading or acquiring $MOONKING by other means, you acknowledge
              that this is not an investment into any such company, partnership
              or any such centralized entity. $MOONKING is an entirely open
              source project whereby anyone is able to volunteer and contribute.
              As this project is led by the community, there is nobody solely
              responsible for the success or failure of $MOONKING.
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
          eligible={user?.eligible ?? false}
          hasClaimed={user?.claimed ?? false}
          handleConnect={() => connect()}
          handleClaim={() => claim()}
        />
        <Footer />
      </>
    </div>
  );
}

export default App;
