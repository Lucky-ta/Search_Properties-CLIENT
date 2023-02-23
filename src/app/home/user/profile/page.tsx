"use client";

import { useContext } from "react";

import { UserProfile } from "components/data/UserProfile";
import { Layout } from "components/Layout";
import { MyContext } from "context";

export default function Page() {
  const { user } = useContext(MyContext);

  return (
    <Layout>
      <UserProfile user={user} />
    </Layout>
  );
}
