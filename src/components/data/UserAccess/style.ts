import styled from "styled-components";

export const UserAccess = styled.div`
    background-color: #4ed4b4;
    height: 100vh;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    max-width: 25rem;
    min-width: 25rem;
    padding: 3rem;
    border-radius: 5px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
    background-color: #333333;
    color: white;

    label {
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 90%;
    }

    button {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      background-color: #4ed4b4;
      color: white;
      border: none;
      border-radius: 5px;
      margin-top: 1rem;
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #38a595;
      }
    }

    input {
      border: none;
      font-size: 1.2rem;
      padding: 0.5rem;
      width: 100%;
      margin-top: 0.5rem;
      transition: all 0.3s ease-in-out;
      background-color: transparent;
      border-bottom: 1px solid white;
      color: white;

      &:focus {
        border-color: lightblue;
        outline: none;
      }
    }
  }
`;
