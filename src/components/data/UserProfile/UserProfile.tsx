"use client";

import { useContext, useRef, useState } from "react";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { Loading } from "components/Loading";
import { Input } from "components/Input";

import {
  getAuthTokenFromCookies,
  setAuthTokenToCookies,
  yupEditValidation,
} from "utils";

import { IUserProfileProps } from "./interface";
import { IUserShape } from "interfaces";

import * as S from "./style";
import { ProfileCard } from "./ProfileCard/ProfileCard";
import { USER_API } from "services/api";
import { MyContext } from "context";

export function UserProfile({ user }: IUserProfileProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useContext(MyContext);
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
    const formErrors = await yupEditValidation(formData);

    if (formErrors) {
      formRef.current?.setErrors(formErrors);
      setIsLoading(false);
      return;
    }

    try {
      formRef.current?.setErrors({});
      const authToken: any = getAuthTokenFromCookies();
      const { token } = await USER_API.editUser(user.id, formData, authToken);
      setToken(token);
      setAuthTokenToCookies(token);
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      formRef.current?.setErrors({ email: errorMessage });
    }

    setIsLoading(false);
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
          <div>{renderInputField("email", "email", "E-mail")}</div>
          <button type="submit">{isLoading ? <Loading /> : "Salvar"}</button>
          <button type="button" onClick={handleDeleteUser}>
            Excluir conta
          </button>
        </Form>
      </div>
    </S.UserProfile>
  );
}
