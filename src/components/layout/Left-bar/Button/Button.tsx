import { IButtonProps } from "./interface";

import * as S from "./style";

export function Button({ content, icon }: IButtonProps) {
  return (
    <S.Button>
      {icon}
      <span>{content}</span>
    </S.Button>
  );
}
