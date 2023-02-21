"use client";

import { useRef, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { MyContext } from "context";

import { Input } from "components/Input";
import { Loading } from "components/Loading";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { setAuthTokenToCookies, yupLoginValidation } from "utils";
import { redirectToPath } from "utils";

import { USER_API } from "services/api";

import { IUserShape } from "interfaces";

import * as S from "../style";

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useContext(MyContext);
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

  const handleFormSubmit = async (formData: Omit<IUserShape, "name">) => {
    setIsLoading(true);

    const formErrors = await yupLoginValidation(formData);

    if (formErrors) {
      formRef.current?.setErrors(formErrors);
      setIsLoading(false);
      return;
    }

    try {
      const { token } = await USER_API.loginUser(formData);
      setAuthTokenToCookies(token);
      setToken(token);
      redirectToPath(router, "/search");
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      formRef.current?.setErrors({ password: errorMessage });
    }

    setIsLoading(false);
  };

  return (
    <S.Form>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        <h1>Entrar</h1>
        {renderInputField("email", "email", "E-mail")}
        {renderInputField("password", "password", "Senha")}
        <button type="submit">
          {isLoading ? <Loading /> : <span>Entrar</span>}
        </button>
      </Form>
    </S.Form>
  );
}
