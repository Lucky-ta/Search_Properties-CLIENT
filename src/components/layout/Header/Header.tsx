"use client";

import { useContext, useState } from "react";

import {
  BsPersonCircle,
  GoThreeBars,
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "public/react-icons";

import { MyContext } from "context";

import { UserModal } from "./UserModal";

import * as S from "./style";

export function Header() {
  const [userModal, setUserModal] = useState(false);
  const { showLeftOption, setShowLeftOption } = useContext(MyContext);

  const handleModalTrigger = () => setShowLeftOption(!showLeftOption);
  const openModal = () => setUserModal(true);
  const closeModal = () => setUserModal(false);

  const handleMProfileTrigger = () => setUserModal(!userModal);

  return (
    <S.Header modalHeaderStatus={userModal}>
      <div>
        <button onClick={handleModalTrigger} type="button">
          {<GoThreeBars />}
        </button>
        <span className="title">Busca de imóveis</span>
      </div>

      <button
        onClick={handleMProfileTrigger}
        className="profile-button"
        type="button"
      >
        {<BsPersonCircle />}
        <span>User name</span>
        {userModal ? (
          <MdOutlineKeyboardArrowUp className="arrow-svg" />
        ) : (
          <MdOutlineKeyboardArrowDown className="arrow-svg" />
        )}
      </button>
      <UserModal
        isModalOpen={userModal}
        closeModal={closeModal}
        openModal={openModal}
      />
    </S.Header>
  );
}
