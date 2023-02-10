import { BiSearchAlt2 } from "public/react-icons";

import * as S from "../style";

export function SearchSystem() {
  return (
    <S.RequestSystem>
      <h1>Pesquisar imóveis</h1>
      <S.Input>
        <button>{<BiSearchAlt2 />}</button>
        <input type="text" placeholder="Pesquisar" />
      </S.Input>
    </S.RequestSystem>
  );
}
