import { useRef } from "react";

import { Input } from "components/data/Input";

import { Form } from "@unform/web";

import * as S from "../style";

export function SignInForm() {
  const formRef = useRef(null);
  const handleFormSubmit = (data: any) => {
    console.log(data);
  };

  const renderInputField = (
    fieldName: string,
    placeholder: string,
    type = "text"
  ) => (
    <label>
      <Input name={fieldName} placeholder={placeholder} type={type} />
    </label>
  );

  return (
    <S.Form>
      <h1>signin form</h1>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        {renderInputField("userEmail", "Digite seu endereço de e-mail")}
        {renderInputField("userPassword", "Digite sua senha")}
        <button type="submit">Entrar</button>
      </Form>
    </S.Form>
  );
}
