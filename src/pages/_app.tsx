import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

// next/font/local handles the basePath-scoped URL, preload and font-display: optional
const inter = localFont({
  src: "../../public/Inter/Inter-VariableFont_slnt,wght.ttf",
  weight: "100 900",
  display: "optional",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Component {...pageProps} />
    </div>
  );
}
