import { BsPersonCircle } from "public/react-icons/icons";

import { IModalProps } from "./interface";

import * as S from "./style";

export function Modal({ isModalOpen, closeModal, openModal }: IModalProps) {
  return (
    <S.Modal
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
    </S.Modal>
  );
}
