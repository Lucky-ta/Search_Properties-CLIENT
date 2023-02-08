import { useContext } from "react";

import { BsPersonCircle, GoThreeBars } from "public/react-icons/icons";

import { MyContext } from "context";

import * as S from "./style";

export function Header() {
  const { showLeftOption, setShowLeftOption } = useContext(MyContext);

  const handleModalTrigger = () => setShowLeftOption(!showLeftOption);

  return (
    <S.Header>
      <div>
        <button onClick={handleModalTrigger} type="button">
          {<GoThreeBars />}
        </button>
        <span>Search properties</span>
      </div>

      <button className="profile-button" type="button">
        {<BsPersonCircle />}
        <span>User name</span>
      </button>
    </S.Header>
  );
}
