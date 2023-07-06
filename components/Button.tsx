import Link from "next/link"

type Props = {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  noStyle?: boolean
  target?: string
  link?: string
}

const Button = ({ children, className, onClick, disabled, noStyle, target, link }: Props) => {
  const buttonCSS = `px-6 py-2 tracking-wide text-[#e9e8e4] capitalize transition-colors duration-300 transform bg-[#212529] hover:bg-[#101418] rounded-lg focus:outline-none focus:ring focus:ring-[#101418] focus:ring-opacity-40 ${className}}`
  return (
    <>
      {link ? (<Link className={!noStyle ? buttonCSS : className} href={link} target={target}>{children}</Link>) : (<button onClick={onClick} disabled={disabled} className={!noStyle ? buttonCSS : className}>{children}</button>)}
    </>
  )
}

export default Button