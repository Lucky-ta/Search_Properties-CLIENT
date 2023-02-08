import { BiSearchAlt2, IoCreateOutline } from "public/react-icons/icons";

import * as S from "./style";

export function LeftBar() {
  return (
    <S.LeftBar>
      <button className="selected-button">
        {<BiSearchAlt2 />}
        <span>Pesquisar</span>
      </button>
      <button>
        {<IoCreateOutline />}
        <span>Registrar</span>
      </button>
    </S.LeftBar>
  );
}
