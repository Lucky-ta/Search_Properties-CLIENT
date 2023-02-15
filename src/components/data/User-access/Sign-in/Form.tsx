import { useRef, useState } from "react";

import { Input } from "components/Input";
import { Loading } from "components/Loading";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { yupUserFormValidation } from "utils/YupValidation";

import { IUserShape } from "interfaces";

import * as S from "../style";
import { UserApi } from "services/api";

export function SignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

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
      const userRoutes = new UserApi();

      formRef.current?.setErrors({});
      setIsLoading(false);
    } else {
      formRef.current?.setErrors(validationResult);
      setIsLoading(false);
    }
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
