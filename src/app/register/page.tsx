"use client";

import { RegisterSystem } from "components/data/RequestSystem";
import { PropertyCard } from "components/data/PropertyCard";
import { Layout } from "components/Layout";

import { IPropertyShape } from "interfaces";

import { UseFetch } from "hooks";

export default function Page() {
  const { data, error } = UseFetch();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const renderRegisteredProperties = () => {
    return data.map((property: IPropertyShape, index: number) => (
      <PropertyCard key={index} property={property} />
    ));
  };
  return (
    <Layout>
      <RegisterSystem />
      <h2>{`Meus registros: (${data.length})`}</h2>
      <div className="search-result">{renderRegisteredProperties()}</div>
    </Layout>
  );
}
