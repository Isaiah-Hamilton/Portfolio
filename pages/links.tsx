import Image from 'next/image'
import Layout from '../components/Layouts'
import Button from '../components/Button'
import config from '../lib/config'

const links = () => {
  return (
    <Layout hideHeader hideFooter>
      <div className="w-fit mx-auto space-y-10 text-center">
        <div className="">
          <Image
            className="rounded-full"
            src={config.links.image}
            width="100%"
            height="100%"
            objectFit="cover"
            alt="profile picture"
          />
        </div>
        <div className="text-4xl font-bold">{config.links.title}</div>
        <div className="space-y-6">
          {config.links.links.map((link: any, i: number) => {
            return (
              <div key={i} className="w-fit mx-auto">
                <Button link={link.url} externalLink>
                  <span>{link.title}</span>
                </Button>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default links
