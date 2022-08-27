import styled from "styled-components";

export const NavContainer = styled.div`
  height: 100px;
  line-height: 100px;
  top: 0px;
  left: 0px;
  /* background:rgba(0,0,0,0.3); */
  background-color: #000;
  position: sticky;

  svg {
    color: #cf2523;
  }
`;

export const HeroContainer = styled.div`
  height: 100vh;
  background-image: url(${require("../images/bg.jpg")});
  background-position: 50% 0;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 640px) {
    height: 100%;
  }
`;
export const Wrapper = styled.div`
  &.flex {
    display: flex;
  }
  &.between {
    width: 100%;
    justify-content: space-between;
  }

  @media (max-width: 640px) {
    justify-content: flex-end !important;
  }
`;

// Modal Styling

export const ModalContainer = styled.div`
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  z-index: 99999;
`;
export const ModalInner = styled.div`
  max-width: 700px;
  box-shadow: 2px 3px 5px #000;
  background: rgb(17 24 39);
  margin: auto;
  margin-top: 100px;
  padding: 20px;
  position: relative;
`;
export const ModalBody = styled.div`
  text-align: center;
`;
export const ModalHeader = styled.div`
  h1 {
    color: #cf2523;
    font-size: 24px;
  }

  .wallet {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 12px;
      color: #f3af00;
    }
  }
`;

export const Inner = styled.div`
display:flex;
flex-wrap:wrap;
width:100%;
padding:50px 0px;
> div{
  width:50%;
  
  &.left{
    text-align:center;
    img{
      width:60%;
    }
  }
  &.right{
    text-align:center;
    img{
      width:70%;
    }
  }
}

@media (max-width:640px){
  padding:20px ;
  > div{
  width:100%;
  &.left{
    img{
      width:80%;
    }
  }
}
`;

export const Action = styled.div`
  text-align: center;
`;
