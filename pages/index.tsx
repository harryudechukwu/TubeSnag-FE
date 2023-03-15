import Head from "next/head";
import React from "react";
import Header from "@/components/header/header";
import Main from "@/components/main";
import Footer from "@/components/footer/footer";
export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta
          name="description"
          content="Download your favorite youtube videos in a SNAP.No fuss, Just fun!
Make youtube your personal library. Download videos and keep your favorites forever.

"
        />
        <meta name="keywords" content="Youtube Download video " />
        <title>TubeSnag</title>

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link
          rel="android-chrome-192x192"
          href="/icons/android-chrome-192x192.png"
        ></link>
        <link
          rel="android-chrome-512x512"
          href="/icons/android-chrome-512x512.png"
        ></link>

        <meta name="theme-color" content="#317EFB" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
