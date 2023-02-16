"use client";

import { useRouter } from "next/navigation";

import { BsPersonCircle } from "public/react-icons";

import { IUserModalProps } from "./interface";

import * as S from "./style";

export function UserModal({
  isModalOpen,
  closeModal,
  openModal,
}: IUserModalProps) {
  const router = useRouter();

  const handleRedirectButton = (path: string) => router.push(path);
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
          onClick={() => handleRedirectButton("/user/profile")}
          type="button"
        >
          {<BsPersonCircle />}
          <span>User name</span>
        </button>
        <button onClick={() => handleRedirectButton("/register")} type="button">
          Registros
        </button>
        <span className="email-span">Username@gmail.com</span>
      </div>
    </S.UserModal>
  );
}
