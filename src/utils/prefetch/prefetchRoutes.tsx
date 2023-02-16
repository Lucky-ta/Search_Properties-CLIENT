import { useRouter } from "next/navigation";

import { useEffect } from "react";

export function PrefetchRoutes() {
  const router = useRouter();
  const routes = ["search", "register", "", "signIn"];

  useEffect(() => {
    routes.forEach((route) => {
      router.prefetch(`/${route}`);
    });
  }, []);
}
