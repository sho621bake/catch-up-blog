import Link from 'next/link'

const HomeBtn = () => {
    return (
        <button className='btn btn-outline btn-info btn-sm'>
            <Link href='/'>Home</Link>
        </button>
    )
}

export default HomeBtn
