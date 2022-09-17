import Link from 'next/link'
type Category = {
    category: string
}

const Breadcrumbs = ({ category }: Category) => {
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
