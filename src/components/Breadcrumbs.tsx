import Link from 'next/link'

const Breadcrumbs = ({ category }: string) => {
    return (
        <div className='breadcrumbs text-sm'>
            <ul>
                <li>
                    <Link href='/'>
                        <a>Home</a>
                    </Link>
                </li>
                <li>{category}</li>
            </ul>
        </div>
    )
}

export default Breadcrumbs
