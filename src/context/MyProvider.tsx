"use client";

import { IUserShape } from "interfaces";
import { useState, useEffect } from "react";

import { getAuthTokenFromCookies, PrefetchRoutes, verifyToken } from "utils";

import { MyContext } from "./MyContext";

interface MyProviderPropsShape {
  children: React.ReactNode;
}

export function MyProvider({ children }: MyProviderPropsShape) {
  const [showLeftOption, setShowLeftOption] = useState(true);
  const [token, setToken] = useState("");
  const [user, setUser] = useState<Omit<IUserShape, "password">>({
    name: "",
    email: "",
    id: 0,
  });

  PrefetchRoutes();

  const data = {
    showLeftOption,
    setShowLeftOption,
    user,
    setUser,
    token,
    setToken,
  };

  useEffect(() => {
    const userToken: any = getAuthTokenFromCookies();
    const decodedToken = verifyToken(userToken);
    setUser(decodedToken);
  }, [token]);

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}
