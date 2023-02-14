import styled from "styled-components";

export const PropertyCard = styled.div`
  width: 100%;
  max-width: 30rem;
  background-color: white;
  border: 1px solid #e6e6e6;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  padding: 16px;
  

  .card-header {
    display: flex;
    position: relative;
    align-items: center;
    margin-bottom: 16px;

    svg {
      font-size: 32px;
      margin-right: 16px;
    }

    h3 {
      font-size: 24px;
      margin-right: 8px;
    }

    span {
      position: absolute;
      font-size: 16px;
      color: #666;
      right: 0;
      border-radius: 2px;
      display: inline-block;
      padding: 0.4rem;
      
      background-color: #1abc9c;
      color: white;
      &.unavailable {
        color: black;
        background-color: #ccc;
      }
    }
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 16px;
  }

  .card-footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;

    div {
      width: 8px;
      height: 8px;
      border-radius: 4px;
    }

    .green-bar {
      background-color: #1abc9c;
      width: 90%;
      margin-bottom: 1rem;
    }

    .red-bar {
      background-color: #e74c3c;
      width: 70%;
      margin-bottom: 1rem;
    }

    span {
      font-size: 16px;
      color: #666;
      width: 100%;
      left: 0;
      font-weight: bold;
    }

    svg {
      position: absolute;
      font-size: 1.2rem;

      right: 0;
      bottom: 0;
      cursor: pointer;
      &:hover {
        color: black;
        font-size: 1.4rem;
      }
    }
  }
`;
