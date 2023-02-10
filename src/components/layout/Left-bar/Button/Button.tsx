import { IButtonProps } from "./interface";

import * as S from "./style";

export function Button({ content, icon, onClick }: IButtonProps) {
  return (
    <S.Button onClick={onClick}>
      {icon}
      <span>{content}</span>
    </S.Button>
  );
}
