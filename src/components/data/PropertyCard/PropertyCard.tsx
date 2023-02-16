"use client";

import { useState } from "react";

import { IPropertyCardProps } from "./interface";

import { BsPersonCircle, VscGear } from "public/react-icons/index";

import { CardModal } from "./CardModal";

import * as S from "./style";

export function PropertyCard({ property }: IPropertyCardProps) {
  const [cardModal, setCardModal] = useState(false);
  const { name, propertyId, isAvailable, registeredBy, address } = property;

  const handleModalTrigger = () => setCardModal(!cardModal);
  const openModal = () => setCardModal(true);
  const closeModal = () => setCardModal(false);

  return (
    <S.PropertyCard>
      <div className="card-header">
        <BsPersonCircle />
        <h3>{registeredBy.name}</h3>
        <span className={isAvailable ? "" : "unavailable"}>
          {isAvailable ? "Disponível" : "Indisponível"}
        </span>
      </div>
      <h2>{name}</h2>
      <span className="address">{`${address.city} - ${address.street}`}</span>
      <div className="card-footer">
        {isAvailable ? (
          <div className="green-bar" />
        ) : (
          <div className="red-bar" />
        )}

        <span className="property-id">{`ID: ${propertyId}`}</span>
        <VscGear onClick={handleModalTrigger} />
      </div>
      <CardModal
        isModalOpen={cardModal}
        closeModal={closeModal}
        openModal={openModal}
        property={property}
      />
    </S.PropertyCard>
  );
}
