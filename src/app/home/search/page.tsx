"use client";

import { useContext } from "react";

import { SearchSystem } from "components/data/RequestSystem";
import { PropertyCard } from "components/data/PropertyCard";
import { Layout } from "components/Layout";

import { useFetchProperties } from "hooks";

import { IPropertyShape } from "interfaces";
import { MyContext } from "context";

export default function Page() {
  const { filter } = useContext(MyContext);
  const { data, error } = useFetchProperties();

  if (error) return <div className="swr-message">Failed to load</div>;
  if (!data) return <div className="swr-message">Loading...</div>;

  console.log(data);

  const filterProperties = (
    properties: IPropertyShape[],
    filter: string
  ): IPropertyShape[] => {
    return properties.filter((property) => {
      const fields = [
        property.name,
        property.propertyId,
        property.city,
        property.street,
        property.registeredByUser.name,
        property.registeredByUser.email,
      ];
      return fields.some((field) =>
        field.toLowerCase().includes(filter.toLowerCase())
      );
    });
  };

  const filteredProperties = filterProperties(data.properties, filter);

  const renderProperties = () => {
    return filteredProperties.map((property: IPropertyShape, index: number) => (
      <PropertyCard key={index} property={property} />
    ));
  };

  return (
    <Layout>
      <SearchSystem />
      <div className="search-result">{renderProperties()}</div>
    </Layout>
  );
}
