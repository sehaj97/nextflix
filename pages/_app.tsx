import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Slab} from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const robotoSlab400 = Roboto_Slab({ subsets: ['latin'],weight: ['400'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={robotoSlab400.className}>
      <Component {...pageProps} />
    </main>
  )
}
