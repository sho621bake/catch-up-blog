import type { Articles } from 'types/article'

type Props = {
    articles: Articles[]
}

const Article = ({ articles }: Props) => {
    return (
        <>
            {articles.map((article) => (
                <a href={`/articles/${article.id}`} key={article.id}>
                    <div className='card card-side mt-10 bg-base-200 shadow-xl'>
                        <div className='card-body'>
                            <h2 className='card-title'>{article.title}</h2>
                        </div>
                        <div>
                            <img
                                src={article.eyecatch.url}
                                alt='content-eye-catch'
                                width={300}
                                height={300}
                                loading='eager'
                            />
                        </div>
                    </div>
                </a>
            ))}
        </>
    )
}
export default Article
