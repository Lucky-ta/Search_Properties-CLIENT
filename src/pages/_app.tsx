import { MyProvider } from "context";
import type { AppProps } from "next/app";
import { GlobalStyle } from "styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MyProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </MyProvider>
  );
}
