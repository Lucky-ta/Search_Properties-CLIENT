"use client";

import { useRef, useState } from "react";

import { useFetchProperties } from "hooks";

import { BsPersonCircle } from "public/react-icons/index";

import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { IPropertyCardShape } from "interfaces";
import { ICardModalProps } from "./interface";

import { Loading } from "components/Loading";
import { Input } from "components/Input";

import {
  formatPropertyToRequestShape,
  getAuthTokenFromCookies,
  yupPropertyEditFormValidation,
} from "utils";

import { PROPERTY_API } from "services/api";

import * as S from "./style";

export function CardModal({
  isModalOpen,
  closeModal,
  openModal,
  property,
}: ICardModalProps) {
  const { isAvailable, registeredByUser } = property;
  const [isLoading, setIsLoading] = useState(false);
  const [availability, setAvailability] = useState(isAvailable);
  const formRef = useRef<FormHandles>(null);

  const { mutate, data } = useFetchProperties();

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

  const handleFormSubmit = async (formData: IPropertyCardShape) => {
    setIsLoading(true);
    const formErrors = await yupPropertyEditFormValidation(formData);

    if (formErrors) {
      formRef.current?.setErrors(formErrors);
      setIsLoading(false);
      return;
    }
    const formatData = formatPropertyToRequestShape(
      property.id,
      formData,
      availability
    );

    try {
      const userToken: any = getAuthTokenFromCookies();
      await PROPERTY_API.editProperty(property.id, formatData, userToken);
      mutate(data);
      setIsLoading(false);
      closeModal();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      formRef.current?.setErrors({ street: errorMessage });
    }

    setIsLoading(false);
  };

  const handleDeleteProperty = async () => {
    setIsLoading(true);

    try {
      const userToken: any = getAuthTokenFromCookies();
      await PROPERTY_API.deleteProperty(property.id, userToken);
      mutate(data);
      setIsLoading(false);
      closeModal();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message || "Something went wrong";
      formRef.current?.setErrors({ street: errorMessage });
    }
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
          <h3>{registeredByUser.name}</h3>
          <span>{registeredByUser.email}</span>
        </div>
        <span>{availability ? "Disponível" : "Indisponível"}</span>
      </div>
      <Form ref={formRef} onSubmit={handleFormSubmit} initialData={property}>
        {renderInputField("name", "text", "Nome")}
        {renderInputField("propertyId", "text", "ID")}
        {renderInputField("city", "text", "Cidade")}
        {renderInputField("street", "text", "Rua")}
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
          <button
            onClick={handleDeleteProperty}
            type="button"
            className="delete"
          >
            EXCLUIR
          </button>
        </div>
        <button type="submit">{isLoading ? <Loading /> : "Salvar"}</button>
      </Form>
    </S.CardModal>
  );
}
