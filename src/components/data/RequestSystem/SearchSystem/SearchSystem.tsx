"use client";

import { useContext } from "react";

import { MyContext } from "context";

import { BiSearchAlt2 } from "public/react-icons";

import * as S from "./style";

export function SearchSystem() {
  const { setFilter } = useContext(MyContext);

  return (
    <S.SearchSystem>
      <h1>Pesquisar imóveis</h1>
      <S.Input>
        <button>{<BiSearchAlt2 />}</button>
        <input
          onChange={({ target }) => setFilter(target.value)}
          type="text"
          placeholder="Pesquisar"
        />
      </S.Input>
    </S.SearchSystem>
  );
}
