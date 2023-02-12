import { useRef, useState } from "react";

import { Input } from "components/Input";
import { Loading } from "components/Loading";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { yupFormValidation } from "utils/YupValidation";

import { IFormShape } from "interfaces";

import * as S from "../style";

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

  const handleFormSubmit = async (formData: IFormShape) => {
    setIsLoading(true);
    const validationResult = await yupFormValidation(formData);

    if (!validationResult) {
      console.log(`Valid user: ${formData}`);
      // API REQUEST - VALIDATE USER AND GET TOKEN
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
