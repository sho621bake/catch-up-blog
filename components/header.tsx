import Image from 'next/image'
import Link from 'next/link'
import ModeSwitch from './ModeSwitch'

const Header = () => {
    return (
        <section className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
            <header className='flex items-center justify-between py-10'>
                <div className='flex items-center justify-between'>
                    <Image
                        src='/image/logo.png'
                        alt='logo icon'
                        loading='eager'
                        width={35}
                        height={35}
                    />
                </div>
                <h1 className='tracking-normal text-left'>
                    <Link href='/'>
                        <a>
                            <span className='font-normal'>Catch</span>
                            <span className='font-semibold'>Up's</span>
                        </a>
                    </Link>
                </h1>
                <div className='flex items-center text-base leading-5'>
                    <ModeSwitch />
                </div>
            </header>
        </section>
    )
}
export default Header
