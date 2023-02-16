import styled from "styled-components";

const BACK_GROUND_LIGHTGRAY = "#eff1f4";

interface IButtonProps {
  isSelected: boolean;
}

export const Button = styled.button<IButtonProps>`
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

  background-color: ${props => props.isSelected && BACK_GROUND_LIGHTGRAY};

  &:hover {
    background-color: ${BACK_GROUND_LIGHTGRAY};
  }
`;
