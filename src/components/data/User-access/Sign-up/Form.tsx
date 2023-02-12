import { useRef, useState } from "react";

import { Input } from "components/data/Input";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { IFormShape } from "interfaces";

import { yupFormValidation } from "utils/YupValidation";

import * as S from "../style";
import { Loading } from "components/Loading";

export function SignUpForm() {
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
      console.log(`Created user: ${formData}`);
      // API REQUEST - CREATE USER
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
