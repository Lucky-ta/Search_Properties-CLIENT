import { BiSearchAlt2 } from "public/react-icons/icons";

import { ISearchProps } from "./interface";

import * as S from "./style";

export function Search({ name }: ISearchProps) {
  return (
    <S.Search>
      <h1>{name}</h1>
      <div>
        <button>{<BiSearchAlt2 />}</button>
        <input type="text" placeholder="Pesquisar" />
      </div>
    </S.Search>
  );
}
