import Image from 'next/image'
import Link from 'next/link'
import Header from '../components/Header'

const error404 = () => {
  return (
    <>
      <Header />
      <div className="w-fit h-screen mx-auto flex items-center">
        <div className="text-center">
          <Image src="/404.svg" alt="404 Image" width={448} height={314} />
          <h1 className="text-3xl font-semibold my-4">Under Maintenance</h1>
          <p className="w-3/4 mx-auto my-4">
            The page that you are looking for under maintenance and will be back soon.
          </p>
          <div className="py-4">
            <Link href="/">
              <a className="bg-blue-500 text-white rounded-lg p-4">Go Back</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default error404
