"use client";

import { useContext } from "react";

import { MyContext } from "context";

import { PrefetchRoutes } from "utils";

import { LeftBar } from "./Left-bar";
import { Header } from "./Header";

import { ILayoutProps } from "./interface";

import * as S from "./style";

export function Layout({ children }: ILayoutProps) {
  PrefetchRoutes();
  const { showLeftOption } = useContext(MyContext);

  return (
    <S.Layout>
      <Header />

      <div className="content">
        {showLeftOption && <LeftBar />}

        <div className="container">{children}</div>
      </div>
    </S.Layout>
  );
}
