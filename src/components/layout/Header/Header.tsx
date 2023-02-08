import { BsPersonCircle } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";

import * as S from "./style";

export function Header() {
  return (
    <S.Header>
      <div>
        <button type="button">{<GoThreeBars />}</button>
        <span>Search properties</span>
      </div>

      <button className="profile-button" type="button">
        {<BsPersonCircle />}
        <span>User name</span>
      </button>
    </S.Header>
  );
}
