import styled from "styled-components";

export const UserProfile = styled.div`
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

  form {
    display: grid;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    max-width: 600px;
    justify-content: center;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    padding: 2rem;
    background-color: #fff;

    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.5rem;
      width: 100%;

      @media (max-width: 800px) {
        grid-template-columns: 1fr;
      }
    }

    label {
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      font-size: 1.2rem;
      font-weight: 600;
    }

    input {
      border: none;
      border-radius: 6px;
      border-bottom: 2px solid #d9d9d9;
      padding: 0.5rem 1rem;
      font-size: 1.2rem;
      font-weight: 400;
      width: 100%;
      background-color: #f5f5f5;
      transition: all 0.2s ease;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    }

    input:hover,
    input:focus {
      outline: none;
      border-color: #00a2ff;
      background-color: #fff;
      box-shadow: 0px 0px 5px rgba(0, 162, 255, 0.5);
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.8rem 1.5rem;
      font-size: 1.2rem;
      font-weight: 600;
      text-transform: uppercase;
      background-color: #00a2ff;
      border: none;
      border-radius: 6px;
      color: #fff;
      cursor: pointer;
      transition: all 0.2s ease;
      width: 100%;
      max-width: 300px;
      margin: auto;
    }

    button:hover {
      background-color: #007acc;
      box-shadow: 0px 0px 5px rgba(0, 162, 255, 0.5);
    }
  }

  button[type="button"] {
    width: 10rem;
    padding: 0.3rem;
    right: 1rem;
    margin: auto;
    background-color: grey;
    margin-right: 0;
    margin-top: 1rem;

    &:hover {
        background-color: red;
        color: white;
    }
  }

  .profile-content {
    display: grid;
    width: 100%;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
