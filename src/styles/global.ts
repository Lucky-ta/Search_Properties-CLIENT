import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    transition: all 0.2s;
    padding: 0;
    margin: 0;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
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
