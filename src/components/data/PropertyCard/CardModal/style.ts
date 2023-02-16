import styled from "styled-components";

import ReactModal from "react-modal";

import { theme } from "styles";
const { colors } = theme;

interface IStyledCardModalProps {
  isAvailable: boolean;
}

export const CardModal = styled(ReactModal) <IStyledCardModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  max-width: 90rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 0.8rem;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.1);

  @media (max-width: 740px) {
    width: 100%;
    height: 100%;
    padding: 2rem 1rem;
    border-radius: 0;
  }

  h2 {
    padding-bottom: 1.2rem;
    font-size: 2rem;
    font-weight: bold;
    color: #222;
  }

  div {
    display: flex;

    .regiteredBy {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      text-align: center;
      margin-bottom: 2rem;

      span {
        font-size: 1rem;
        color: ${colors.secondary};
      }
    }

    svg {
      width: 4rem;
      height: 4rem;
      margin-right: 1rem;
      color: #aaa;

      @media (max-width: 340px) {
        display: none;
      }
    }

    h3 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: bold;
      color: #333;
    }

    span {
      margin-left: auto;
      font-size: 1.4rem;
      font-weight: bold;
      color: ${({ isAvailable }) =>
    isAvailable ? `${colors.cardEnable}` : `${colors.cardDisabled}`};
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      gap: 0.3rem;
    }

    input {
      border: 1px solid ${colors.secondary};
      padding: 0.6rem;
      border-radius: 4px;
    }

    h1 {
      font-size: 2rem;
      font-weight: bold;
      color: #222;
    }

    div {
      button {
        font-size: 1rem;
        padding: 0.6rem;
        border-radius: 2px;
      }

      button.enable {
        background-color: ${({ isAvailable }) =>
    isAvailable ? `${colors.cardEnable}` : `${colors.secondary}`};
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
      }

      button.disable {
        background-color: ${({ isAvailable }) =>
    isAvailable ? `${colors.secondary}` : `${colors.cardDisabled}`};
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      }
    }

    button {
      padding: 1rem 2rem;
      border: none;
      border-radius: 0.8rem;
      background-color: #0077ff;
      color: #fff;
      font-size: 1.6rem;
      font-weight: bold;
      cursor: pointer;
      justify-content: center;
      transition: background-color 0.2s;

      div {
        margin: auto;
      }

      &:hover {
        background-color: #0066cc;
      }
    }
  }
`;
