"use client";

import { useRouter } from "next/navigation";

import { BsPersonCircle } from "public/react-icons";
import { redirectToPath } from "utils";

import { IUserModalProps } from "./interface";

import * as S from "./style";

export function UserModal({
  isModalOpen,
  closeModal,
  openModal,
  user,
}: IUserModalProps) {
  const router = useRouter();

  const handleRedirectButton = (path: string) => redirectToPath(router, path);
  return (
    <S.UserModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      onAfterOpen={openModal}
      overlayClassName="Overlay"
    >
      <h2>Perfil</h2>
      <div>
        <button
          onClick={() => handleRedirectButton("/home/user/profile")}
          type="button"
        >
          {<BsPersonCircle />}
          <span>{user.name?.split(" ")[0]}</span>
        </button>
        <button
          onClick={() => handleRedirectButton("/home/register")}
          type="button"
        >
          Registros
        </button>
        <button
          className="exit-button"
          onClick={() => handleRedirectButton("/signIn")}
          type="button"
        >
          Sair
        </button>
        <span className="email-span">{user.email}</span>
      </div>
    </S.UserModal>
  );
}
