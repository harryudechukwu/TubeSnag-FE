import { Silkscreen } from 'next/font/google'




const silkscreen = Silkscreen(
    {
        weight: "700",
        subsets: ['latin'],
    },
)


export default function Hero(): JSX.Element {

    return (
        <div 
        className={`flex flex-col items-center justify-center gap-4
        my-10
        `}
        >
             <div className="">
                <h1
                className='text-2xl font-bold text-center
                px-4
                mx-auto
                mb-6
                leading-[1.4]
                md:text-5xl
                max-w-[900px]
                md:leading-[1.6]
                sm:text-4xl
                sm:px-4
                '
                >
                    Download your favorite youtube <span
                        className='
                        bg-gradient-to-br
                        from-[#C70AF6]
                        to-[#3D00EC]
                        text-transparent
                        bg-clip-text
                        '
                    >videos</span> <span
                        className='text-[#D1CECC]'
                    >
                        in a <span
                            className={`${silkscreen.className}`}
                        >SNAP.</span>
                        No fuss, Just fun!
                    </span>

                    
                </h1>
                <h2
                className='text-center
                text-xl
                text-[#8E8E93]
                max-w-[650px]
                mx-auto
                px-4
                '
                >
                    Make youtube your personal library. Download videos and keep your favorites forever.
                </h2>
            </div>

            <div
            className='absolute
            h-[200px]
            w-[200px]
            border-2
            rounded-full
             sm:bg-gradient-to-b
                        from-[#C70AF6]
                        to-[#3D00EC]
                        blur-[150px]
                        top-[200px]
                        right-[200px]
                        animate-pulse
                        '>

               

            </div>

            <div
                className='absolute
            h-[200px]
            w-[200px]
            border-2
            rounded-full
             sm:bg-gradient-to-b
                        from-[#C70AF6]
                        to-[#3D00EC]
                        blur-[150px]
                        top-[500px]
                        left-[200px]
                        animate-pulse
                        '>



            </div>

        </div>

        
    )
}