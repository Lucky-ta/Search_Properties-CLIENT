"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

export function PrefetchRoutes() {
  const router = useRouter();
  const routes = ["search", "register", "", "signIn", "user/profile"];

  useEffect(() => {
    routes.forEach((route) => {
      router.prefetch(`/${route}`);
    });
  }, []);
}
