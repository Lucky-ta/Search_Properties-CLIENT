"use client";

import { useRouter } from "next/navigation";
import { redirectToPath } from "utils";

import * as S from "components/Layout/style";

export default function Page() {
  const router = useRouter();
  const handleGoBack = () => redirectToPath(router, "/signIn");

  return (
    <S.ErrorLayout>
      <h1 className="error-title">Invalid token</h1>
      <p className="error-message">
        The token provided is invalid or has expired.
      </p>
      <button className="error-button" onClick={handleGoBack}>
        Go back
      </button>
    </S.ErrorLayout>
  );
}
