"use client";

import { useState, useEffect } from "react";
import { MyContext } from "./MyContext";

import { IUserShape } from "interfaces";

import { getAuthTokenFromCookies, PrefetchRoutes, verifyToken } from "utils";

interface MyProviderPropsShape {
  children: React.ReactNode;
}

export function MyProvider({ children }: MyProviderPropsShape) {
  const [showLeftOption, setShowLeftOption] = useState(true);
  const [token, setToken] = useState("");
  const [filter, setFilter] = useState("");
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
    filter,
    setFilter,
  };

  useEffect(() => {
    const userToken: any = getAuthTokenFromCookies();
    const decodedToken = verifyToken(userToken);
    setUser(decodedToken);
  }, [token]);

  return <MyContext.Provider value={data}>{children}</MyContext.Provider>;
}
