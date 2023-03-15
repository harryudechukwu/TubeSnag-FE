import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import localFont from 'next/font/local'

const excon = localFont({
  src: [
    {

      path: '../public/fonts/Excon-Bold.ttf',
      weight: '700',
    },
    {
      path: '../public/fonts/Excon-Regular.ttf',
      weight: '400',
    },
    {
      path: '../public/fonts/Excon-Light.ttf',
      weight: '300',
    }
  ],
  variable: '--font-excon',
})




export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
    className={` ${excon.className} font-excon`}
    >
      <Component {...pageProps} />
    </div>
  )
}
