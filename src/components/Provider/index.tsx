import { type JSX } from "react";

import { type IProvider, StoopProvider } from "../../index";
import { ProviderStyled } from "./styles";
import { ToastController } from "./ToastController";

// Note: globalCss is automatically applied by StoopProvider when globalCss is passed to createStoop
// No need to manually call it here - it's handled in stoop.config.ts

export default function Provider({ children, css, dark = false }: IProvider): JSX.Element {
  const themeName = dark ? "dark" : "light";

  if (!StoopProvider) {
    throw new Error(
      "Provider is not available. Make sure themes config is provided to createStoop.",
    );
  }

  return (
    <StoopProvider attribute="data-theme" defaultTheme={themeName} storageKey="hoststack-ui-theme">
      <ProviderStyled css={css}>
        <ToastController />
        {children}
      </ProviderStyled>
    </StoopProvider>
  );
}
