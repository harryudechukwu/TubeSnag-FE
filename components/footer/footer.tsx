import { Silkscreen } from "next/font/google";

const silkscreen = Silkscreen({
    weight: "400",
    subsets: ["latin"],
});

export default function Footer(): JSX.Element {
    return (
        <footer
        className={`my-6 mt-auto flex flex-col items-center
        justify-center
        `}
        >
            <h2
            className={`mx-auto mb-2 max-w-[900px] ${silkscreen.className}
             bg-gradient-to-br
                        from-[#C70AF6]
                        to-[#3D00EC]
                        bg-clip-text
                        text-2xl
                        text-transparent
            `}
            >
                BUILT WITH ❤ BY TRIO
            </h2>
        <p
        className={`mx-auto max-w-[900px] font-mono text-[#8E8E93]`}
        >© {year}</p>
        </footer>
    )
    }



const year:number = new Date().getFullYear();