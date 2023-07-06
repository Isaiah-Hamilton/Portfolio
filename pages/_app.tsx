import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Alexandria } from 'next/font/google'

const alexandria = Alexandria({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`bg-[#e9e8e4] text-[#101418] overflow-x-clip ${alexandria.className}`}>
      <Component {...pageProps} />
    </main >
  )
}
