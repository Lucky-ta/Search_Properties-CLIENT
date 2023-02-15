import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  color: #3d495c;
  background-color: #fafafa;




  .content {
    display: flex;
    width: 100%;
    height: calc(100% - 8%);
  }

  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 1rem;
    gap: 1.2rem;
    overflow: auto;


    .search-result {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1rem;
    }
  }
`;
