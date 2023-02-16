import StyledComponentsRegistry from "lib/registry";

import { MyProvider } from "context";

import { GlobalStyle } from "styles/global";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <StyledComponentsRegistry>
        <GlobalStyle />
        <MyProvider>{children}</MyProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
