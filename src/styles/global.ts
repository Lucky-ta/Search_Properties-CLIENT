"use client";

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    transition: all 0.2s;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}


button {
    display: flex;
    background: none;
    border: none;
    cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
p,
span,
strong,
i,
a,
label,
li {
  text-rendering: optimizeLegibility !important;
}

.Overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
  }

  div.swr-message {
    font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #ffcccc;
  color: #ff0000;
  padding: 1rem;
  border-radius: 6px;
  }
`;
