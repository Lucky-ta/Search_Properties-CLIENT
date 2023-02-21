import styled from "styled-components";

export const Loading = styled.div`
  width: 1em !important;
  height:1em !important;
  border-radius: 400px !important;
  border: 5px solid #ccc !important;
  border-top-color: #333 !important;
  animation: spin 1s linear infinite !important;
  margin: auto !important;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;