import { useContext, useState } from "react";

import {
  BsPersonCircle,
  GoThreeBars,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "public/react-icons";

import { MyContext } from "context";

import { Modal } from "./Modal";

import * as S from "./style";

export function Header() {
  const [profileModal, setProfileModal] = useState(false);
  const { showLeftOption, setShowLeftOption } = useContext(MyContext);

  const handleModalTrigger = () => setShowLeftOption(!showLeftOption);
  const openModal = () => setProfileModal(true);
  const closeModal = () => setProfileModal(false);

  const handleMProfileTrigger = () => setProfileModal(!profileModal);

  return (
    <S.Header>
      <div>
        <button onClick={handleModalTrigger} type="button">
          {<GoThreeBars />}
        </button>
        <span>Busca de imóveis</span>
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
      <Modal
        isModalOpen={profileModal}
        closeModal={closeModal}
        openModal={openModal}
      />
    </S.Header>
  );
}
