import "@9gustin/react-notion-render/dist/index.css";
import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <LayoutWrapper>
      <Component {...pageProps} />
    </LayoutWrapper>
  );
}

export default MyApp;
