import { IInputProps } from "./interface";

import * as S from "./style";

export function Input({ placeholder, icon }: IInputProps) {
  return (
    <S.Input>
      <button>{icon}</button>
      <input type="text" placeholder={placeholder} />
    </S.Input>
  );
}
