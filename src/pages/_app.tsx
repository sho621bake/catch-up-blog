import 'src/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import usePageView from 'src/hooks/usePageView'

function MyApp({ Component, pageProps }: AppProps) {
    usePageView()
    return (
        <ThemeProvider attribute='data-theme'>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
