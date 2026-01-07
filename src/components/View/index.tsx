import { type JSX } from "react";

import { type IView } from "../../index";
import { ViewStyled, ViewContainerStyled } from "./styles";

export default function View({
  app,
  as,
  bottom,
  children,
  container,
  css,
  id,
  inverted,
  top,
}: IView): JSX.Element {
  const isDark = inverted;

  return (
    <ViewStyled
      as={as}
      css={{
        ...(top && {
          marginTop: 0,
          paddingTop: `$${top}`,
        }),
        ...(bottom && {
          marginBottom: 0,
          paddingBottom: `$${bottom}`,
        }),
        ...(isDark && {
          backgroundColor: "$background",
          color: "$text",
        }),
        ...css,
      }}
      id={id ? `view-${id}` : undefined}
      inverted={inverted}>
      <ViewContainerStyled app={app} container={container}>
        {children}
      </ViewContainerStyled>
    </ViewStyled>
  );
}

View.displayName = "View";
