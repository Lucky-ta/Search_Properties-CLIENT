"use client";

import React, { useEffect, useRef } from "react";

import { useField } from "@unform/core";

import { IInputProps } from "./interface";

export function Input({ name, type, ...rest }: IInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: type !== "checkbox" ? "value" : "checked",
    });
  }, [fieldName, registerField, type]);

  return (
    <>
      <input type={type} defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && <span style={{ color: "red" }}>{error}</span>}
    </>
  );
}
