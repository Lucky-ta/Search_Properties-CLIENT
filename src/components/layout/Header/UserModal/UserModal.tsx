import { BsPersonCircle } from "public/react-icons";

import { IUserModalProps } from "./interface";

import * as S from "./style";

export function UserModal({
  isModalOpen,
  closeModal,
  openModal,
}: IUserModalProps) {
  return (
    <S.UserModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      onAfterOpen={openModal}
      overlayClassName="Overlay"
    >
      <h2>Perfil</h2>
      <div>
        <button type="button">
          {<BsPersonCircle />}
          <span>User name</span>
        </button>
        <button type="button">Registros</button>
        <span className="email-span">Username@gmail.com</span>
      </div>
    </S.UserModal>
  );
}
