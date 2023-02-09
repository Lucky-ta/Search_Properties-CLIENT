import { BiSearchAlt2, IoCreateOutline } from "public/react-icons/icons";
import { Button } from "./Button";

import * as S from "./style";

export function LeftBar() {
  return (
    <S.LeftBar>
      <Button content="Pesquisar imóvel" icon={<BiSearchAlt2 />} />
      <Button content="Regitrar imóvel" icon={<IoCreateOutline />} />
    </S.LeftBar>
  );
}
