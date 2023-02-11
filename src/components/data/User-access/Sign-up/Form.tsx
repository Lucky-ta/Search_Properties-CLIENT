import { useRef } from "react";

import { Input } from "components/data/Input";

import { Form } from "@unform/web";

import * as S from "../style";

export function SignUpForm() {
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
      <h1>Criar conta</h1>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        {renderInputField("userName", "Digite seu nome completo")}
        {renderInputField("userEmail", "Digite seu endereço de e-mail")}
        {renderInputField("userPassword", "Crie uma senha", "password")}
        <button type="submit">Criar conta</button>
      </Form>
    </S.Form>
  );
}
