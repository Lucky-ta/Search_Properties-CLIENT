import styled from "styled-components";

const BACK_GROUND_LIGHTGRAY = "#eff1f4";

export const Button = styled.button`
  gap: 0.6rem;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;

  span {
    font-size: 1rem;
  }

  svg {
    font-size: 1.3rem;
  }

  &:hover {
    background-color: ${BACK_GROUND_LIGHTGRAY};
  }
`;
