"use client";

import { IButtonProps } from "./interface";

import * as S from "./style";

export function Button({ content, icon, isSelected, onClick }: IButtonProps) {
  return (
    <S.Button isSelected={isSelected} onClick={onClick}>
      {icon}
      <span>{content}</span>
    </S.Button>
  );
}
