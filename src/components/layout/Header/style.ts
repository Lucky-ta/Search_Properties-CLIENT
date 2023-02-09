import styled from "styled-components";

const BACK_GROUND_LIGHTGRAY = "#eff1f4";

export const Header = styled.div`
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
  padding: 1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  align-items: center;
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  button {
    gap: 1rem;
    border-radius: 4px;
    align-items: center;
    font-size: 1.2rem;
    padding: 1.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;

    &:hover {
      background-color: ${BACK_GROUND_LIGHTGRAY};
    }
  }
  .profile-button {
    padding: 0.1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 20rem;
    min-width: 12rem;
    border: 1px solid #c6c7c9;
  }

  div {
    display: flex;
    align-items: center;
    gap: 0.1rem;
    font-size: 1.3rem;
    font-weight: bold;

    span {
      border-left: 1px solid #c6c7c9;
      padding-left: 0.5rem;
      cursor: pointer;
    }
  }
`;
