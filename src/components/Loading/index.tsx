import type { JSX } from "react";

import { LoadingStyled } from "./styles";

export default function Loading(): JSX.Element {
  return (
    <LoadingStyled aria-live="polite" role="status">
      <svg height="100%" viewBox="0 0 100 100" width="100%" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="currentColor" points="10,50 50,15 90,50 90,100 10,100" />
      </svg>
    </LoadingStyled>
  );
}

Loading.displayName = "Loading";
