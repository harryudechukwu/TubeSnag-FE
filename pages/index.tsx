import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
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
        <link rel="android-chrome-192x192" href="/icons/android-chrome-192x192.png"></link>
        <link rel="android-chrome-512x512" href="/icons/android-chrome-512x512.png"></link>

        <meta name="theme-color" content="#317EFB" />
      </Head>
      <main >
       

        <h1 className="text-3xl font-bold underline">
          TubeSnag
        </h1>

   
      </main>
    </>
  )
}