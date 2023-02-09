import { BiSearchAlt2 } from "public/react-icons/icons";

import { Search } from "components/data/Search/index";
import { Layout } from "components/Layout";

export default function Home() {
  return (
    <Layout>
      <Search
        inputIcon={<BiSearchAlt2 />}
        inputPlaceholder="Pesquisar"
        name="Pesquisar imóvel"
      />
    </Layout>
  );
}
