import { useContext, useState } from "react";

import {
  BsPersonCircle,
  GoThreeBars,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "public/react-icons/icons";

import { MyContext } from "context";

import * as S from "./style";

export function Header() {
  const [profileModal, setProfileModal] = useState(false);
  const { showLeftOption, setShowLeftOption } = useContext(MyContext);

  const handleModalTrigger = () => setShowLeftOption(!showLeftOption);
  const handleMProfileTrigger = () => setProfileModal(!profileModal);

  return (
    <S.Header>
      <div>
        <button onClick={handleModalTrigger} type="button">
          {<GoThreeBars />}
        </button>
        <span>Search properties</span>
      </div>

      <button
        onClick={handleMProfileTrigger}
        className="profile-button"
        type="button"
      >
        {<BsPersonCircle />}
        <span>User name</span>
        {profileModal ? (
          <MdOutlineKeyboardArrowUp className="arrow-svg" />
        ) : (
          <MdOutlineKeyboardArrowDown className="arrow-svg" />
        )}
      </button>
    </S.Header>
  );
}
