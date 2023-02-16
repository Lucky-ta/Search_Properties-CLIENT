"use client";

import { useRouter } from "next/navigation";

import { BiSearchAlt2, IoCreateOutline } from "public/react-icons";
import { useEffect, useState } from "react";

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
        isSelected={selectedPath === "/search"}
        content="Pesquisar imóvel"
        icon={<BiSearchAlt2 />}
        onClick={() => handleRedirectPath("/search")}
      />
      <Button
        isSelected={selectedPath === "/register"}
        content="Regitrar imóvel"
        icon={<IoCreateOutline />}
        onClick={() => handleRedirectPath("/register")}
      />
    </S.LeftBar>
  );
}
