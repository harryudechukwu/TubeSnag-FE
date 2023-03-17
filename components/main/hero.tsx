import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero(): JSX.Element {
  return (
    <div
      className={`my-10 flex flex-col items-center justify-center
        gap-4
        `}
    >
      <div className="">
        <h1
          className="mx-auto mb-6 max-w-[900px]
                px-4
                text-center
                text-3xl
                font-bold
                leading-[1.4]
                sm:px-4
                sm:text-4xl
                md:text-5xl
                md:leading-[1.6]
                "
        >
          Download your favorite youtube{" "}
          <span
            className="
                        bg-gradient-to-br
                        from-[#C70AF6]
                        to-[#3D00EC]
                        bg-clip-text
                        text-transparent
                        "
          >
            videos
          </span>{" "}
          <span className="text-[#D1CECC]">
            in a <span className={`${silkscreen.className}`}>SNAP.</span>
            No fuss, Just fun!
          </span>
        </h1>
        <h2
          className="mx-auto
                max-w-[650px]
                px-4
                text-center
                text-lg
                text-[#8E8E93]
                "
        >
          Make youtube your personal library. Download videos and keep your
          favorites forever.
        </h2>
      </div>

      <div
        className="absolute
            top-[200px]
            right-[200px]
            h-[200px]
            w-[200px]
             animate-pulse
                        rounded-full
                        border-2
                        from-[#C70AF6]
                        to-[#3D00EC]
                        blur-[150px]
                        sm:bg-gradient-to-b
                        "
      ></div>

      <div
        className="absolute
            top-[500px]
            left-[200px]
            h-[200px]
            w-[200px]
             animate-pulse
                        rounded-full
                        border-2
                        from-[#C70AF6]
                        to-[#3D00EC]
                        blur-[150px]
                        sm:bg-gradient-to-b
                        "
      ></div>
    </div>
  );
}
