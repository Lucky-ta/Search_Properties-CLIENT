import { UserProfile } from "components/data/UserProfile";
import { Layout } from "components/Layout";

export default function Page() {
  const userMock = {
    name: "Lucas",
    email: "someemail@gmail.com",
    password: "123456",
  };
  return (
    <Layout>
      <UserProfile user={userMock} />
    </Layout>
  );
}
