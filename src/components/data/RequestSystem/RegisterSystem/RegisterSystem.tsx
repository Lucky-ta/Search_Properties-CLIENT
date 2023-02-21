"use client";

import { useRef, useState } from "react";

import { Loading } from "components/Loading";
import { Input } from "components/Input";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { getAuthTokenFromCookies, yupPropertyFormValidation } from "utils";

import { IPropertyShape } from "interfaces";

import * as S from "./style";
import { PROPERTY_API } from "services/api";

export function RegisterSystem() {
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

  const handleFormSubmit = async (formData: IPropertyShape) => {
    setIsLoading(true);
    const formErrors = await yupPropertyFormValidation(formData);

    if (formErrors) {
      formRef.current?.setErrors(formErrors);
      setIsLoading(false);
      return;
    }

    try {
      const userToken: any = getAuthTokenFromCookies();
      await PROPERTY_API.createProperty(formData, userToken);
      setIsLoading(false);
      formRef.current?.reset();
      formRef.current?.setErrors({});
      return;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      formRef.current?.setErrors({ street: errorMessage });
      setIsLoading(false);
    }
  };

  return (
    <S.RegisterSystem>
      <h1>Registrar imóveis</h1>
      <Form ref={formRef} onSubmit={handleFormSubmit}>
        {renderInputField("name", "text", "Nome")}
        {renderInputField("propertyId", "text", "ID")}
        {renderInputField("city", "text", "Cidade")}
        {renderInputField("street", "text", "Rua")}
        {renderInputField(
          "isAvailable",
          "checkbox",
          "O imóvel esta disponível?"
        )}
        <button type="submit">{isLoading ? <Loading /> : "Registrar"}</button>
      </Form>
    </S.RegisterSystem>
  );
}
