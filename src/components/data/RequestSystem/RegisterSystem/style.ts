import styled from "styled-components";

export const RegisterSystem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 3rem;
  height: 100%;
  margin-bottom: 6rem;

  h1 {
    border-bottom: 1px solid gray;
    width: 80%;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 60%;
  }

  label {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: column;

    &.checkbox {
        flex-direction: row;
        flex-flow: row-reverse;
        cursor: pointer;
        gap: 1rem;
        justify-content: start;
    }

    input[type="checkbox"] {
        cursor: pointer;
        color: green;
    }

  }

  input {
    border: none;
    border-radius: 6px;
    border-bottom: 2px solid #d9d9d9;
    padding: 0.5rem 1rem;
    font-size: 1.2rem;
    background-color: #f5f5f5;
    transition: all 0.2s ease;

    &:hover,
    &:focus {
      outline: none;
    border-color: #00a2ff;
    background-color: #fff;
    box-shadow: 0px 0px 5px rgba(0, 162, 255, 0.5);

    }
  }

  button {
    padding: 0.8rem 1.5rem;
    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    background-color: #00a2ff;
    border: none;
    border-radius: 6px;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease;
    justify-content: center;
  }

  button:hover {
    background-color: #007acc;
  }
`;
