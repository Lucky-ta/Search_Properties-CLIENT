import { HiOutlinePlusSm } from "public/react-icons/icons";

import { Search } from "components/data/Search";
import { Layout } from "components/Layout";

export default function Register() {
  return (
    <Layout>
      <Search
        inputIcon={<HiOutlinePlusSm />}
        inputPlaceholder="Registrar"
        name="Registrar imóvel"
      />
    </Layout>
  );
}
