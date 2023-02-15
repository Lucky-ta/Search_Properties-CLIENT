import { useRef, useState } from "react";

import { HiOutlinePlusSm } from "public/react-icons";

import { Loading } from "components/Loading";
import { Input } from "components/Input";

import { Form } from "@unform/web";

import * as S from "./style";
import { yupPropertyFormValidation } from "utils/YupValidation";
import { IPropertyShape } from "interfaces";
import { FormHandles } from "@unform/core";

export function RegisterSystem() {
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

  const handleFormSubmit = async (formData: IPropertyShape) => {
    setIsLoading(true);

    const validationResult = await yupPropertyFormValidation(formData);
    console.log(validationResult);

    if (!validationResult) {
      setIsLoading(false);
      formRef.current?.setErrors({});
    } else {
      formRef.current?.setErrors(validationResult);
      setIsLoading(false);
    }
  };

  return (
    <S.RegisterSystem>
      <h1>Registrar imóveis</h1>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        {renderInputField("name", "text", "Nome")}
        {renderInputField("propertyId", "text", "ID")}
        {renderInputField("address.city", "text", "Cidade")}
        {renderInputField("address.street", "text", "Rua")}
        <button type="submit">{isLoading ? <Loading /> : "Registrar"}</button>
      </Form>
    </S.RegisterSystem>
  );
}
