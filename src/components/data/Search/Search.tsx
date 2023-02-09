import { Input } from "components/Inputs";
import { BiSearchAlt2 } from "public/react-icons/icons";

import { ISearchProps } from "./interface";

import * as S from "./style";

export function Search({ name, inputPlaceholder, inputIcon }: ISearchProps) {
  return (
    <S.Search>
      <h1>{name}</h1>
      <Input icon={inputIcon} placeholder={inputPlaceholder} />
    </S.Search>
  );
}
