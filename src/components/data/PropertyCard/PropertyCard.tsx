import { IPropertyCardProps } from "./interface";

import { BsPersonCircle, VscGear } from "public/react-icons/index";

import * as S from "./style";

export function PropertyCard({ property }: IPropertyCardProps) {
  const { name, propertyId, isAvailable, registeredBy } = property;
  console.log(property);

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
      <div className="card-footer">
        {isAvailable ? (
          <div className="green-bar" />
        ) : (
          <div className="red-bar" />
        )}

        <span className="property-id">{`ID: ${propertyId}`}</span>
        <VscGear />
      </div>
    </S.PropertyCard>
  );
}
