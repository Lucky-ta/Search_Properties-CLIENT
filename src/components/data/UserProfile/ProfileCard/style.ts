import styled from "styled-components";

export const ProfileCard = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  .card-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;

    svg {
      font-size: 3rem;
    }

    h2 {
      margin: 0;
      font-size: 2rem;
      font-weight: 700;
      color: #333;
    }
  }

  div.card-footer {
    border-top: 1px solid grey;
    height: 100%;
  }

  div.dev-info {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    gap: 0.4rem;
    height: 100%;
    justify-content: center;
    
    h2 {
        margin-bottom: 0.5rem;
    }

    svg {
        font-size: 1.2rem;
        color: black;
    }

    span {
        display: flex;
        gap: 0.5rem;
    }

  }
`;
