"use client";

import { useRef, useState } from "react";

import { ICardModalProps } from "./interface";

import { BsPersonCircle } from "public/react-icons/index";

import { Loading } from "components/Loading";
import { Input } from "components/Input";

import { Form } from "@unform/web";

import * as S from "./style";
import { yupPropertyEditFormValidation } from "utils";
import { IPropertyShape } from "interfaces";
import { FormHandles } from "@unform/core";

export function CardModal({
  isModalOpen,
  closeModal,
  openModal,
  property,
}: ICardModalProps) {
  const { isAvailable, registeredBy } = property;
  const [isLoading, setIsLoading] = useState(false);
  const [availability, setAvailability] = useState(isAvailable);
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

  const toggleAvailability = (value: boolean) => setAvailability(value);

  const handleFormSubmit = async (formData: IPropertyShape) => {
    console.log(formData);
    console.log(property);

    setIsLoading(true);
    const formErrors = await yupPropertyEditFormValidation(formData);

    if (formErrors) {
      formRef.current?.setErrors(formErrors);
      setIsLoading(false);
      return;
    }
    console.log("request");

    // API REQUEST
    setIsLoading(false);
  };

  return (
    <S.CardModal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      onAfterOpen={openModal}
      overlayClassName="Overlay"
      isAvailable={availability}
    >
      <h2>EDITAR REGISTRO</h2>
      <div>
        <BsPersonCircle />
        <div className="regiteredBy">
          <h3>{registeredBy.name}</h3>
          <span>{registeredBy.email}</span>
        </div>
        <span>{availability ? "Disponível" : "Indisponível"}</span>
      </div>
      <Form ref={formRef} onSubmit={handleFormSubmit} initialData={property}>
        {renderInputField("name", "text", "Nome")}
        {renderInputField("propertyId", "text", "ID")}
        {renderInputField("address.city", "text", "Cidade")}
        {renderInputField("address.street", "text", "Rua")}
        <div>
          <button
            className="enable"
            type="button"
            onClick={() => toggleAvailability(true)}
          >
            DISPONÍVEL
          </button>
          <button
            className="disable"
            type="button"
            onClick={() => toggleAvailability(false)}
          >
            INDISPONÍVEL
          </button>
        </div>
        <button type="submit">{isLoading ? <Loading /> : "Salvar"}</button>
      </Form>
    </S.CardModal>
  );
}
