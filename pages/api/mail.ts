// @ts-ignore
import nodemailer from 'nodemailer'
import { Data } from '../../lib/data'

export default function sendEmail(req: any, res: any) {
  let transporter = nodemailer.createTransport({
    // @ts-ignore
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    secure: false, // true for 465, false for other ports
    auth: {
      user: Data.email,
      pass: process.env.PASS_EMAIL,
    },
  })

  transporter
    .sendMail({
      from: req.body.email,
      to: Data.email,
      replyTo: req.body.email,
      subject: `Portfolio Website: ${req.body.subject}`,
      text: req.body.message,
      html: req.body.message,
    })
    .then((response: any) => {
      res.send(response)
    })
    .catch((error: any) => {
      res.send(error)
    })
}
