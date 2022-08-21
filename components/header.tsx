import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import ModeSwitch from './ModeSwitch'
import siteMetadata from '../data/siteMetadata'

const Header = () => {
    return (
        <header className='flex items-center justify-between py-10'>
            <Head>
                <meta charSet={siteMetadata.charset} />
                <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1.0'
                />
                <meta name='description' content={siteMetadata.description} />
                <title>{siteMetadata.title}</title>
            </Head>
            <div className='flex items-center'>
                <Image
                    src={siteMetadata.siteLogo}
                    alt='logo icon'
                    loading='eager'
                    width={35}
                    height={35}
                    priority
                />
                <Link href='/' aria-label={siteMetadata.headerTitle}>
                    <a className='ml-3'>
                        <span className='mr-1 text-2xl font-normal'>Catch</span>
                        <span className='text-2xl font-semibold'>Up's</span>
                    </a>
                </Link>
            </div>
            <div className='flex items-center text-base leading-5'>
                <ModeSwitch />
            </div>
        </header>
    )
}
export default Header
