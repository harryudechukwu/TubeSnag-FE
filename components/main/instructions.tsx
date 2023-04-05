// how to use tubesnag
import React from 'react';
import Image from "next/image";
import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
});

function instructions() {
  return (
    <>
      <section className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">

          <div className="mt-10">
            <Image src="/apple-touch-icon.png" className="mx-auto h-10 w-10 rounded-full" alt="icon" width={10} height={10} />
          </div>
          <figure className="mt-12">
            <blockquote className="text-center text-2xl font-bold leading-8 text-gray-900  sm:leading-9">
              <p><span className={`${silkscreen.className} text-indigo-700 `}>How</span> tubesnag works?</p>
            </blockquote>
          </figure>

          {/* <!-- copy --> */}
          <div className="mt-20">
            <Image className="mx-auto h-12 w-12" src="/copy.png" alt="icon" width={50} height={50} />
          </div>
          <figure className="mt-3">
            <blockquote className="text-center text-2xl leading-8 text-gray-900 sm:leading-9">
              <p className="mt-6 text-lg">Firsly, open your browser, head over to <a className="underline"
                href="https://www.youtube.com/" target="_blank" rel="noreferrer">youtube.com</a>, look for
                the video you want to download,
                <span className="font-bold leading-8 sm:leading-9">Copy the video link </span>from the address bar
                of your preferred browser
              </p>
            </blockquote>
            <picture>
              <source media="(min-width: 900px)" srcSet="/Illustrationonebig.png" />
              <source media="(min-width: 480px)" srcSet="/Illustrationonesmall.png" />
              <img src="./Illustrationonebig.png" alt="Illustration" />
            </picture>
          </figure>

          {/* paste */}
          <div>
            <Image className="mx-auto h-12 w-12" src="/paste.png" alt="" width={50} height={50} />
          </div>
          <figure className="mt-3">
            <blockquote className="text-center text-2xl leading-8 text-gray-900 sm:leading-9">
              <p className="mt-6 text-lg">
                Secondly, head over to{' '}
                <a className="underline" href="http://tubesnag.vercel.app/">
                  tubesnag
                </a>
                , choose your preferred download method either “Single” or Batch” download, Paste your youtube video link in
                the input field and hit “Fetch video” button
              </p>
            </blockquote>
            <center>
              <picture>
                <source media="(min-width: 900px)" srcSet="/Illustrationtwobig.png" />
                <source media="(min-width: 480px)" srcSet="/Illustrationtwosmall.png" />
                <Image src="/Illustrationtwobig.png" alt="Illustration" width={680} height={680} />
              </picture>
            </center>
          </figure>

          {/* resolution */}
          <div>
            <Image className="mx-auto h-12 w-12" src="/resolution.png" alt="resolution img" width={48} height={48} />
          </div>
          <figure className="mt-3">
            <blockquote className="text-center text-2xl leading-8 text-gray-900 sm:leading-9">
              <p className="mt-6 text-lg">
                Lastly, a modal showing a preview of some information about the video is shown and the video is available
                for download at your preferred download resolution, Boom!
              </p>
            </blockquote>
            <picture>
              <source media="(min-width: 900px)" srcSet="/Illustrationthreebig.png" />
              <source media="(min-width: 480px)" srcSet="/Illustrationthreesmall.png" />
              <Image src="/Illustrationthreebig.png" alt="IfItDoesntMatchAnyMedia" width={680} height={680} />
            </picture>
          </figure>
          <div>
            <h1 className="mx-auto mt-6 mb-5 max-w-[900px] px-4 text-center text-2xl font-bold leading-[1.4] sm:px-4 sm:text-3xl md:text-4xl md:leading-[1.6]">
              Packed with the right tools. <br />{' '}
              <span className="text-[#D1CECC]">Something you didn’t expect.</span>
            </h1>
            <center>
              <div className="">
                <Image className="h-auto max-w-full rounded-lg" src="/finalillustration.png" alt="App screenshot" width={680} height={680} />
              </div>
            </center>
          </div>

        </div>
      </section>
    </>
  )
}

export default instructions;