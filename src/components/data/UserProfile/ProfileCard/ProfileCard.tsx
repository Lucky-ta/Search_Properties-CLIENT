"use client";

import {
  BsPersonCircle,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineLinkedin,
} from "public/react-icons";

import { IUserProfileProps } from "../interface";

import * as S from "./style";

export function ProfileCard({ user }: IUserProfileProps) {
  return (
    <S.ProfileCard>
      <div className="card-header">
        <BsPersonCircle />
        <div>
          <h2>{user.name}</h2>
          <h3>{user.email}</h3>
        </div>
      </div>
      <div className="card-footer">
        <div className="dev-info">
          <h2>Informações do desenvolvedor</h2>
          <span>
            <AiOutlinePhone /> (55) 51-995779312
          </span>
          <span>
            <AiOutlineMail /> Oficiallucasmaieski@gmail.com
          </span>
          <span>
            <AiOutlineLinkedin /> linkedin.com/in/lucasmaieski/
          </span>
        </div>
      </div>
    </S.ProfileCard>
  );
}
