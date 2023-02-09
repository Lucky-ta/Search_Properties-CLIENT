import styled from "styled-components";

const BACK_GROUND_LIGHTGRAY = "#eff1f4";

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

  button {
    gap: 0.6rem;
    padding: 1rem;
    border-radius: 4px;
    cursor: pointer;

    span {
      font-size: 1rem;
    }

    svg {
      font-size: 1.3rem;
    }

    &:hover {
      background-color: ${BACK_GROUND_LIGHTGRAY};
    }
  }

  .selected-button {
    background-color: ${BACK_GROUND_LIGHTGRAY};
  }
`;
