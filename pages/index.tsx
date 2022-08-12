import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
const Home = () => {
    return (
        <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
            <div className='flex h-screen flex-col justify-between'>
                <Header />
            </div>
        </div>
    )
}

export default Home
