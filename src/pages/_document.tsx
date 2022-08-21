import { Html, Head, Main, NextScript } from 'next/document'
import siteMetadata from 'data/siteMetadata'

const Document = () => {
    return (
        <Html lang={siteMetadata.language}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

export default Document
