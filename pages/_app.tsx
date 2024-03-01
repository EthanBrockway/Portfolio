import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "./Components/navbar"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
    </main>
  )
}
