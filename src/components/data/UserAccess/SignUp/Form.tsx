"use client";

import { useRef, useState } from "react";

import { Input } from "components/Input";
import { Loading } from "components/Loading";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { IUserShape } from "interfaces";

import { yupUserFormValidation } from "utils";

import * as S from "../style";
import { USER_API } from "services/api";
import { redirectToPath } from "utils";
import { useRouter } from "next/navigation";

export function SignUpForm() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();

  const renderInputField = (
    fieldName: string,
    type: "text" | "email" | "password",
    labelText: string
  ) => (
    <label>
      {labelText}:
      <Input name={fieldName} type={type} />
    </label>
  );

  const handleFormSubmit = async (formData: IUserShape) => {
    setIsLoading(true);
    const validationResult = await yupUserFormValidation(formData);

    if (!validationResult) {
      await USER_API.createUser(formData);
      formRef.current?.setErrors({});
      setIsLoading(false);
      redirectToPath(router, "/signIn");
      return;
    } else {
      formRef.current?.setErrors(validationResult);
      setIsLoading(false);
    }
  };

  return (
    <S.Form>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <h1>Criar conta</h1>
        {renderInputField("name", "text", "Nome")}
        {renderInputField("email", "email", "E-mail")}
        {renderInputField("password", "password", "Senha")}
        <button type="submit">
          {isLoading ? <Loading /> : <span>Criar conta</span>}
        </button>
      </Form>
    </S.Form>
  );
}
