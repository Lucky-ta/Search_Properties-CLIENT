"use client";

import { SearchSystem } from "components/data/RequestSystem";
import { PropertyCard } from "components/data/PropertyCard";
import { Layout } from "components/Layout";

import { useFetchProperties } from "hooks";

import { IPropertyShape } from "interfaces";

export default function Page() {
  const { data, error } = useFetchProperties();

  if (error) return <div className="swr-message">Failed to load</div>;
  if (!data) return <div className="swr-message">Loading...</div>;

  const properties = data.properties;
  const renderProperties = () => {
    return properties.map((property: IPropertyShape, index: number) => (
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
