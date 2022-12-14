import { Html, Head, Main, NextScript } from 'next/document'
import siteMetadata from 'data/siteMetadata'
import { existGaId, GA_ID } from 'libs/gtag'

const Document = () => {
    return (
        <Html lang={siteMetadata.language}>
            <Head>
                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/image/favicons/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/image/favicons/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/image/favicons/favicon-16x16.png'
                />
                <link rel='manifest' href='/image/favicons/site.webmanifest' />
                <link
                    rel='mask-icon'
                    href='/image/favicons/safari-pinned-tab.svg'
                    color='#5bbad5'
                />
                <meta name='msapplication-TileColor' content='#00aba9' />
                <meta name='theme-color' content='#ffffff' />
                {/* Google Analytics */}
                {existGaId && (
                    <>
                        <script
                            async
                            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                        />
                        <script
                            dangerouslySetInnerHTML={{
                                __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_ID}', {
                                page_path: window.location.pathname,
                                });`,
                            }}
                        />
                    </>
                )}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
