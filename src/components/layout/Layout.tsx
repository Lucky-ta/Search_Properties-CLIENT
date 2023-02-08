import { LeftBar } from "./Left-bar";
import { Header } from "./Header";

import { ILayoutProps } from "./interface";

import * as S from "./style";

export function Layout({ children }: ILayoutProps) {
  return (
    <S.Layout>
      <Header />

      <div className="content">
        <LeftBar />

        <div className="container">{children}</div>
      </div>
    </S.Layout>
  );
}
