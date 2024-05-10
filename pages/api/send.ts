import type { NextApiRequest, NextApiResponse } from 'next'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  let { name, email, message } = req.body
  message = message as string
  email = email as string
  name = name as string

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing query parameters' })
  }

  try {
    const data = await resend.emails.send({
      from: `${name} <portfolio@isaiah-hamilton.com>`,
      to: 'isaiah7hamilton@gmail.com',
      subject: `Portfolio: New message from ${name}`,
      text: message,
    })
    res.status(200).json(data)
  } catch (error) {
    res.status(400).json(error)
  }
}
