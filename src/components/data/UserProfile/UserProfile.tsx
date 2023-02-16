"use client";

import { useRef, useState } from "react";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { Loading } from "components/Loading";
import { Input } from "components/Input";

import { yupUserFormValidation } from "utils";

import { IUserProfileProps } from "./interface";
import { IUserShape } from "interfaces";

import * as S from "./style";
import { ProfileCard } from "./ProfileCard/ProfileCard";

export function UserProfile({ user }: IUserProfileProps) {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const renderInputField = (
    fieldName: string,
    type: string,
    labelText: string
  ) => (
    <label className={type}>
      {labelText}
      <Input name={fieldName} type={type} />
    </label>
  );

  const handleFormSubmit = async (formData: IUserShape) => {
    setIsLoading(true);
    const validationResult = await yupUserFormValidation(formData);

    if (!validationResult) {
      console.log(`Created user: ${formData}`);
      // API REQUEST - EDIT USER
      formRef.current?.setErrors({});
      setIsLoading(false);
    } else {
      formRef.current?.setErrors(validationResult);
      setIsLoading(false);
    }
  };

  const handleDeleteUser = () => console.log("Delete account");
  return (
    <S.UserProfile>
      <h1>Meu perfil</h1>
      <div className="profile-content">
        <ProfileCard user={user} />
        <Form ref={formRef} onSubmit={handleFormSubmit} initialData={user}>
          <h2>Editar</h2>
          {renderInputField("name", "text", "Nome")}
          <div>
            {renderInputField("email", "email", "E-mail")}
            {renderInputField("password", "password", "Senha")}
          </div>
          <button type="submit">{isLoading ? <Loading /> : "Salvar"}</button>
          <button type="button" onClick={handleDeleteUser}>
            Excluir conta
          </button>
        </Form>
      </div>
    </S.UserProfile>
  );
}
