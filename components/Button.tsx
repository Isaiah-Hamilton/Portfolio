import Link from 'next/link'
import { motion } from 'framer-motion'

interface Props {
  link: string
  externalLink?: boolean
  children: React.ReactNode
  onClick?: () => void
  className?: string
}

const Button = (props: Props) => {
  const { link, children, externalLink, onClick, className } = props

  return (
    <motion.div whileTap={{ scale: 0.9 }} className="w-fit">
      <button
        className={`inline-flex items-center mt-4 text-sm sm:text-base text-white bg-blue-500 hover:bg-blue-600 rounded-md transition ease-in duration-150 ${className}`}
        onClick={onClick || (() => {})}
      >
        <Link href={link}>
          <a
            className="px-4 sm:px-6 py-2 sm:py-3 text-sm"
            target={externalLink ? '_blank' : undefined}
          >
            {children}
          </a>
        </Link>
      </button>
    </motion.div>
  )
}

export default Button
