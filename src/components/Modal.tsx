import React from "react";
import { ModalContainer, ModalBody, ModalInner, ModalHeader } from "./style";
import { CSSTransition } from "react-transition-group";
interface IModal {
  open: boolean;
  account: string;
  close: () => void;
}

const Modal = ({ open, account, close }: IModal) => {
  return (
    <CSSTransition in={open}  unmountOnExit timeout={200} classNames="alert">
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
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              ullam neque quibusdam fugiat delectus deserunt rem necessitatibus
              odio atque voluptates, illo eius doloribus? Minima soluta
              accusantium nihil, dolorem culpa eligendi.
            </p>

            <br />

            {account ? (
              <button className="btn-primary">Claimed</button>
            ) : (
              <button className="btn-primary">Connect Wallet</button>
            )}
          </ModalBody>
          <br />
        </ModalInner>
      </ModalContainer>
    </CSSTransition>
  );
};
export default Modal;
