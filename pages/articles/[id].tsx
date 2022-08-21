import Header from 'components/Header'
import Footer from 'components/Footer'
import HomeBtn from 'components/HomeBtn'
import type { Articles } from 'types/article'
import { client } from 'libs/client'

type Props = {
    article: Articles
}

const ArticleId: React.FC = ({ article }: Props) => {
    const publish_date = new Date(article.publishedAt)
    return (
        <>
            <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
                <div className='flex h-screen flex-col justify-between'>
                    <Header />
                    <main className='mb-auto'>
                        <div className='space-y-3 pt-6 pb-8 md:space-y-6'>
                            <div className=' border-b-2 border-gray-300'>
                                <h1 className='md:leading-14 pb-4 text-4xl font-extrabold leading-9 tracking-tight sm:text-4xl sm:leading-10 md:text-4xl'>
                                    {article.title}
                                </h1>
                            </div>
                            <span className='mt-0 flex text-gray-600'>
                                <p className='mr-2'>投稿日:</p>
                                {`${publish_date.getFullYear()}-${publish_date.getMonth()}-${publish_date.getDate()}`}
                            </span>
                        </div>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `${article.content}`,
                            }}
                        />
                        <div className='mt-10 text-center'>
                            <HomeBtn />
                        </div>
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}

export default ArticleId

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: 'articles' })

    const paths = data.contents.map((content: any) => `/articles/${content.id}`)
    return { paths, fallback: false }
}

export const getStaticProps = async (context: any) => {
    const id = context.params.id
    const data = await client.get({ endpoint: 'articles', contentId: id })

    return {
        props: {
            article: data,
        },
    }
}
