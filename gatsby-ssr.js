import wrapWithProvider from "./wrap-with-provider"
export const wrapRootElement = wrapWithProvider

import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="preload-roboto-font"
      rel="preload"
      as="style"
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
    />,
    <link
      key="roboto-font"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
    />,
    <link
      rel="preload"
      href="/fonts/Mikro-Regular.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="mikroRegular"
    />,
    <link
      rel="preload"
      href="/fonts/Mikro-RegularItalic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="mikroRegularItalic"
    />,
    <link
      rel="preload"
      href="/fonts/Mikro-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="mikroBold"
    />,
    <link
      rel="preload"
      href="/fonts/Mikro-BoldItalic.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="mikroBoldItalic"
    />,
  ])
}
