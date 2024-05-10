import { Section, Button, Input, Textarea, IconCalendar, IconCopy, IconTwitter } from '@/components'
import { useState } from 'react'

const Contact = () => {
  const [buttonText, setButtonText] = useState('Send')
  const [loding, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const SendEmail = async (name: string, email: string, message: string) => {
    setLoading(true)
    setButtonText('Sending...')

    // get lastSentEmail timestamp from local storage and check if it's been 5 minutes
    const lastSentEmail = localStorage.getItem('lastSentEmail')
    if (lastSentEmail) {
      const timeDifference = Date.now() - JSON.parse(lastSentEmail)
      if (timeDifference < 300000) {
        setButtonText('wait 5 minutes')
        setTimeout(() => {
          setButtonText('Send')
          setLoading(false)
        }, 2000)
        return
      } else {
        fetch('/api/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, message }),
        })

        // set lastSentEmail timestamp in local storage
        localStorage.setItem('lastSentEmail', JSON.stringify(Date.now()))
        setTimeout(() => {
          setButtonText('Sent')
          setLoading(false)
        }, 800)
      }
    }
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('isaiah7hamilton@gmail.com')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="bg-[#dfddd9]">
      <Section id="contact" className="relative z-20 !pb-0">
        <h2 className="text-[34px] sm:text-[46px] md:text-[54px] lg:text-[72px] text-left md:text-center tracking-tight font-semibold mb-10 md:w-fit md:mx-auto">
          Let&apos;s work together
        </h2>
        <div className="md:w-4/5 xl:w-3/4 2xl:w-1/2 mx-auto space-y-4">
          <div className="grid grid-rows-3 md:grid-rows-none md:grid-cols-3 gap-4">
            <Button className="col-span-1" link="https://cal.com/isaiah-hamilton" target="_blank">
              <div className="flex items-center w-fit mx-auto">
                <span>Book call</span>
                <IconCalendar />
              </div>
            </Button>
            <Button onClick={() => copyEmail()} className="col-span-1">
              <div className="flex items-center w-fit mx-auto">
                <span>{copied ? 'Copied email' : 'Copy email'}</span>
                <IconCopy />
              </div>
            </Button>
            <Button
              className="col-span-1"
              link="https://twitter.com/isaiah7hamilton"
              target="_blank"
            >
              <div className="flex items-center w-fit mx-auto">
                <span>DM me</span>
                <IconTwitter />
              </div>
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-[#101418] h-[1px] w-full rounded-full" />
            <p className="text-center">or</p>
            <div className="bg-[#101418] h-[1px] w-full rounded-full" />
          </div>
          <div>
            <div className="grid grid-rows-2 md:grid-rows-none md:grid-cols-2 gap-4">
              <Input
                className="col-span-1"
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <Input
                className="col-span-1"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <Textarea
              placeholder="Message"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
            <Button
              onClick={() => SendEmail(name, email, message)}
              disabled={!name || !email || !message || loding ? true : false}
              className="w-full mt-4 py-4"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Contact
