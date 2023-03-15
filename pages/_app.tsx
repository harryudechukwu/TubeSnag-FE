import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { useState, useEffect } from "react";

const excon = localFont({
  src: [
    {
      path: "../public/fonts/Excon-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Excon-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Excon-Light.ttf",
      weight: "300",
    },
  ],
  variable: "--font-excon",
});

export default function App({ Component, pageProps }: AppProps) {
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    const handleServiceWorkerUpdate = () => {
      setUpdateAvailable(true);
    };

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.addEventListener(
        "controllerchange",
        handleServiceWorkerUpdate
      );
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data.type === "SKIP_WAITING") {
          window.location.reload();
        }
      });
    }

    return () => {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.removeEventListener(
          "controllerchange",
          handleServiceWorkerUpdate
        );
      }
    };
  }, []);

  return (
    <main className={` ${excon.className}
    
    flex min-h-screen flex-col
    `}
    
    >
      <Component {...pageProps} />
      {updateAvailable && (
        <div
          className="fixed inset-x-0 bottom-0 rounded-t-md bg-[#845eee] p-4 text-center text-white"
        >
          <p>
            A new version of this app is available.{" "}
            <button
              className="underline"
              onClick={() => window.location.reload()}
            >
              Click here to refresh
            </button>
          </p>
        </div>
      )}
    </main>
  );
}
