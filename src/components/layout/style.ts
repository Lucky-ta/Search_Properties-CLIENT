import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  color: #3d495c;

  background-color: #fafafa;

  .content {
    display: flex;
    height: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem;
    gap: 2rem;
    overflow: auto;

    .search-result {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
    }
  }
`;
