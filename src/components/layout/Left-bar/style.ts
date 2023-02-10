import styled from "styled-components";


export const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  min-width: 12rem;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

  height: 100vh;
  padding-top: 1.5rem;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  gap: 0.3rem;

  animation-name: slidein;
  animation-duration: 0.8s;
  @keyframes slidein {
    from {
      margin-left: -15%;
    }
    to {
      margin-left: 0%;
    }
  }



`;
