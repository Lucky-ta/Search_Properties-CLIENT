"use client";

import { useContext } from "react";

import { MyContext } from "context";

import { UserProfile } from "components/data/UserProfile";
import { Layout } from "components/Layout";

export default function Page() {
  const { user } = useContext(MyContext);

  return (
    <Layout>
      <UserProfile user={user} />
    </Layout>
  );
}
