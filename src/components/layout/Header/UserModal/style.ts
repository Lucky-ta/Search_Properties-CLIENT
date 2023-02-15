import ReactModal from "react-modal";

import styled from "styled-components";

export const UserModal = styled(ReactModal)`
  position: fixed;
  top: 5%;
  right: 0%;
  width: 12rem;
  max-width: 500px;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

  animation: slideinprofile 0.4s ease-in-out;
  @keyframes slideinprofile {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    width: 100%;
    padding: 0.5rem;
    border-radius: 4px;
    border: none;
    background-color: #5e6b76;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #3e474f;
    }

    &:active {
      transform: translateY(2px);
    }
  }

  div {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    align-items: center;
  }

  .email-span {
    font-size: 0.9rem;
    font-weight: bold;
    color: grey;
    position: absolute;
    margin: auto;
    bottom: 0.5rem;
  }
`;
