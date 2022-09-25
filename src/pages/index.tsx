import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import Article from 'src/components/Article'
import { client } from 'libs/client'

const Home = (props: any) => {
    return (
        <>
            <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
                <div className='flex h-screen flex-col justify-between'>
                    <Header />
                    <p className='text-center text-sm'>
                        CatchUp'sはプログラミング言語やフレームワークなどのリリース情報や
                        技術情報を配信するブログサイトです。
                    </p>
                    <main className='mb-auto'>
                        <div className='space-y-4 pt-6 pb-8 md:space-y-6'>
                            <div className='mb-10 border-b-2 border-gray-300'>
                                <h1 className='md:leading-14 pb-4 text-4xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl'>
                                    News
                                </h1>
                            </div>
                            <Article articles={props.articles} />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default Home

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: 'articles' })
    return {
        props: {
            articles: data.contents,
        },
    }
}
