import type { Articles } from 'types/article'
import Image from 'next/image'

type Props = {
    articles: Articles[]
}

const Article = ({ articles }: Props) => {
    return (
        <>
            {articles.map((article) => (
                <a href={`/articles/${article.id}`} key={article.id}>
                    <div className='card card-side mt-10 bg-base-200 shadow-xl'>
                        <div className='flex w-full justify-between'>
                            <div className='card-body'>
                                <h2 className='card-title'>{article.title}</h2>
                            </div>
                            <div className='block'>
                                <div style={{ width: 300, height: 200 }}>
                                    <Image
                                        src={article.eyecatch.url}
                                        alt='content-eye-catch'
                                        width={300}
                                        height={200}
                                        loading='eager'
                                        layout='responsive'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </>
    )
}
export default Article
