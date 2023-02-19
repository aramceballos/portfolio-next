import React from "react";
import { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Analytics />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
