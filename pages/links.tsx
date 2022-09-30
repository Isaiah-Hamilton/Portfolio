import Link from 'next/link'
import Header from '../components/Header'
import { PinIcon } from '../components/Icons'
import config from '../lib/config'

const links = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12 bg-cover bg-[url('/floss.jpg')]">
        <div className="relative sm:max-w-xl sm:mx-auto">
          <div className="relative p-10 bg-white shadow-lg sm:rounded-3xl bg-clip-padding bg-opacity-50 border border-gray-200 card">
            <div className="max-w-md mx-auto">
              <div className="w-fit mx-auto">
                <img
                  src="https://avatars.githubusercontent.com/u/70828596?v=4"
                  width="100"
                  height="100"
                  alt="profile"
                  className="rounded-full"
                />
              </div>
              <div className="py-4 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="text-center pb-4">
                  <h1 className="font-semibold text-2xl pb-1">{config.name}</h1>
                  <span className="text-base">{config.role}</span>
                  <div className="flex items-center w-fit mx-auto">
                    <div>
                      <PinIcon width={'16'} height={'16'} />
                    </div>
                    <span className="text-sm">{config.location}</span>
                  </div>
                </div>

                <div className="flex space-x-5">
                  {config.social.map((social: any, i: number) => {
                    return (
                      <Link href={social.url} key={i}>
                        <a target="_blank">
                          <div
                            className="p-2.5 rounded-xl"
                            style={{ backgroundColor: social.color }}
                          >
                            <svg width="30" height="30" viewBox="0 0 24 24">
                              <path
                                fill="#FFFFFF"
                                fillRule="evenodd"
                                d={social.icon}
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </a>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default links
