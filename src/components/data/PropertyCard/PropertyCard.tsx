"use client";

import { useState, useContext } from "react";

import { IPropertyCardProps } from "./interface";

import { BsPersonCircle, VscGear } from "public/react-icons/index";

import { CardModal } from "./CardModal";

import * as S from "./style";
import { MyContext } from "context";

export function PropertyCard({ property }: IPropertyCardProps) {
  const [cardModal, setCardModal] = useState(false);
  const { user } = useContext(MyContext);
  const { name, propertyId, isAvailable, registeredByUser, city, street } =
    property;

  const handleModalTrigger = () => setCardModal(!cardModal);
  const openModal = () => setCardModal(true);
  const closeModal = () => setCardModal(false);

  return (
    <S.PropertyCard>
      <div className="card-header">
        <BsPersonCircle />
        <h3>{registeredByUser.name}</h3>
        <span className={isAvailable ? "" : "unavailable"}>
          {isAvailable ? "Disponível" : "Indisponível"}
        </span>
      </div>
      <h2>{name}</h2>
      <span className="address">{`${city} - ${street}`}</span>
      <div className="card-footer">
        {isAvailable ? (
          <div className="green-bar" />
        ) : (
          <div className="red-bar" />
        )}

        <span className="property-id">{`ID: ${propertyId}`}</span>
        {property.registeredByUser.id === user.id && (
          <VscGear onClick={handleModalTrigger} />
        )}
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
