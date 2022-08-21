import siteMetadata from 'data/siteMetadata'

const Footer = () => {
    return (
        <footer className='footer footer-center p-4 text-base-content'>
            <div className='mt-16 flex flex-col items-center'>
                <p>
                    Copyright © {new Date().getFullYear()} - All right reserved
                    by {siteMetadata.title}
                </p>
            </div>
        </footer>
    )
}

export default Footer
