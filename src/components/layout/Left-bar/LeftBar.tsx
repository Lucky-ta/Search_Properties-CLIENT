"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { BiSearchAlt2, IoCreateOutline } from "public/react-icons";

import { Button } from "./Button";

import * as S from "./style";

export function LeftBar() {
  const [selectedPath, setSelectedPath] = useState("");
  const router = useRouter();

  const handleRedirectPath = (path: string) => router.push(path);

  useEffect(() => {
    setSelectedPath(window.location.pathname);
  }, [router]);

  return (
    <S.LeftBar>
      <Button
        isSelected={selectedPath === "/home/search"}
        content="Pesquisar imóvel"
        icon={<BiSearchAlt2 />}
        onClick={() => handleRedirectPath("/home/search")}
      />
      <Button
        isSelected={selectedPath === "/home/register"}
        content="Regitrar imóvel"
        icon={<IoCreateOutline />}
        onClick={() => handleRedirectPath("/home/register")}
      />
    </S.LeftBar>
  );
}
