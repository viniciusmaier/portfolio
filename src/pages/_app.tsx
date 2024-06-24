
import type { AppProps } from "next/app";
//import '@/src/styles/reset.css'
import '@/src/styles/globals.css'
import Header from "../components/Header";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
