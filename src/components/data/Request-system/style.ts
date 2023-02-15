import styled from "styled-components";

export const RequestSystem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-top: 3rem;

  h1 {
    border-bottom: 1px solid gray;
    width: 80%;
    text-align: center;
  }
`;

export const Input = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  width: 70%;

  input {
    width: 100%;
    border: none;
    padding: 1.2rem;
    border-radius: 8px;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    font-weight: bold;
    font-size: 1rem;
    margin: auto;
  }

  button {
    position: relative;
    font-size: 2rem;
    position: absolute;
    right: 1rem;
  }
`;
