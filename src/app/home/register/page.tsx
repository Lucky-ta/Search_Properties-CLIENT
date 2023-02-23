"use client";

import { useContext } from "react";

import { MyContext } from "context";

import { RegisterSystem } from "components/data/RequestSystem";
import { PropertyCard } from "components/data/PropertyCard";
import { Layout } from "components/Layout";

import { IPropertyShape } from "interfaces";

import { useFetchProperties } from "hooks";

export default function Page() {
  const { data, error } = useFetchProperties();
  const { user } = useContext(MyContext);

  if (error) return <div className="swr-message">Failed to load API</div>;
  if (!data) return <div className="swr-message">Loading...</div>;

  const properties = data.properties.filter(
    (propery: IPropertyShape) => propery.registeredByUser.id === user.id
  );
  const renderRegisteredProperties = () => {
    return properties.map((property: IPropertyShape, index: number) => (
      <PropertyCard key={index} property={property} />
    ));
  };
  return (
    <Layout>
      <RegisterSystem />
      <h2>{`Meus registros: (${properties.length})`}</h2>
      <div className="search-result">{renderRegisteredProperties()}</div>
    </Layout>
  );
}
