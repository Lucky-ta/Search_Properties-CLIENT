import React, { useEffect, useRef } from "react";

import { useField } from "@unform/core";

import { IInputProps } from "./interface";

import * as S from "./style";

export function Input({ name, placeholder, ...rest }: IInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <S.Input>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </S.Input>
  );
}
