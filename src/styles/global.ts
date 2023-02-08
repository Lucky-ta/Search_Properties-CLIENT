import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
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

`;
