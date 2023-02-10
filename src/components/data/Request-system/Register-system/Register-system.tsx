import { HiOutlinePlusSm } from "public/react-icons";

import * as S from "../style";

export function RegisterSystem() {
  return (
    <S.RequestSystem>
      <h1>Registrar imóveis</h1>
      <S.Input>
        <button>{<HiOutlinePlusSm />}</button>
        <input type="text" placeholder="Registrar" />
      </S.Input>
    </S.RequestSystem>
  );
}
