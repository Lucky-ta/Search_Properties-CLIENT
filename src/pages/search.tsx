import { SearchSystem } from "components/data/Request-system";
import { PropertyCard } from "components/data/PropertyCard";
import { Layout } from "components/Layout";

import { UseFetch } from "hooks";
import { IPropertyShape } from "interfaces";

export default function Home() {
  const { data, error } = UseFetch();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const renderProperties = () => {
    return data.map((property: IPropertyShape, index: number) => (
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
