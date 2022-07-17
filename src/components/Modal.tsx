import React from "react";
import { ModalContainer, ModalBody, ModalInner, ModalHeader } from "./style";
import { CSSTransition } from "react-transition-group";
interface IModal {
  open: boolean;
  account: undefined | string | null;
  eligible:boolean;
  hasClaimed:boolean
  close: () => void;
  handleConnect: () => void;
  handleClaim: () => void;
}

const Modal = ({
  open,
  eligible,
  account,
  hasClaimed,
  close,
  handleConnect,
  handleClaim,
}: IModal) => {
  return (
    <CSSTransition in={open} unmountOnExit timeout={200} classNames="alert">
      <ModalContainer>
        <ModalInner>
          <ModalHeader>
            <h1>Moonking Reward</h1>
            {account && (
              <div className="wallet">
                <h3>Connected Wallet</h3>
                <p>{account}</p>
              </div>
            )}
            <div onClick={close}>
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
          </ModalHeader>
          <br />

          <ModalBody>
            <h3>
             {!eligible? "Sorry!!!":"Congratulations!!!"}

            </h3>
           {eligible? (hasClaimed?<p>You have already claimed your 55500 $MoonKing Tokens</p> :<p>You are eligible to claim 55500 $MoonKing Tokens</p>):
            <p>You are NOT eligible to claim 55500 $MoonKing Tokens</p>}

            <br />

            {account ? (
              (hasClaimed||!eligible)?<button className="btn-primary" onClick={close}>
                Close
              </button> :<button className="btn-primary" onClick={handleClaim}>
                Claim
              </button>
            ) : (
              <button className="btn-primary" onClick={handleConnect}>
                Connect Wallet
              </button>
            )}
          </ModalBody>
          <br />
        </ModalInner>
      </ModalContainer>
    </CSSTransition>
  );
};
export default Modal;
