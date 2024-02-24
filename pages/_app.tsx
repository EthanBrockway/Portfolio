import "@/styles/globals.css"
import type { AppProps } from "next/app"
import Navbar from "./Components/navbar"
import Footer from "./Components/footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  )
}
