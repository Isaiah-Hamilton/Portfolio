import Image from 'next/image'
import Button from '../components/Button'
import Layout from '..//components/Layouts'
import Header from '../components/Header'

const error404 = () => {
  return (
    <>
      <Header />
      <div className="overflow-y-clip">
        <Layout hideHeader hideFooter>
          <div className="w-fit h-screen mx-auto flex items-center">
            <div className="text-center">
              <Image src="/404.svg" alt="404 Image" width={448} height={314} />
              <h1 className="text-3xl font-semibold my-4">Under Maintenance</h1>
              <p className="w-3/4 mx-auto my-4">
                The page that you are looking for under maintenance and will be back soon.
              </p>
              <div className="flex justify-center">
                <Button link="/">Go Back</Button>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default error404
