"use client";

import { useRouter } from "next/navigation";

import { BiSearchAlt2, IoCreateOutline } from "public/react-icons";

import { Button } from "./Button";

import * as S from "./style";

export function LeftBar() {
  const router = useRouter();

  const handleRedirectPath = (path: string) => router.push(path);
  return (
    <S.LeftBar>
      <Button
        content="Pesquisar imóvel"
        icon={<BiSearchAlt2 />}
        onClick={() => handleRedirectPath("/search")}
      />
      <Button
        content="Regitrar imóvel"
        icon={<IoCreateOutline />}
        onClick={() => handleRedirectPath("/register")}
      />
    </S.LeftBar>
  );
}
