import { Search } from "components/data/Search/index";
import { Layout } from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <Search name="Pesquisar imóvel" />
    </Layout>
  );
}
