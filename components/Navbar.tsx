import { Button } from "@/components"
import { NavLinks } from "@/lib/data"
import { NavLinkTypes } from "@/lib/types"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="w-full fixed top-0 p-4 sm:px-6 md:px-10 lg:px-20 z-30" style={{ backdropFilter: 'blur(24px)', backgroundColor: '#e9e8e469', opacity: 1 }}>
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">Isaiah Hamilton</div>
        <div className="hidden md:flex items-center space-x-6">
          {NavLinks.map((item: NavLinkTypes) => (
            <Link key={item.text} href={item.url}>
              <span>{item.text}</span>
            </Link>
          ))}
        </div>
        <Button onClick={() => setIsOpen(!isOpen)} noStyle className="block md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
          </svg>
        </Button>
      </div>
      <motion.div
        className="space-y-4 md:hidden"
        initial={{ height: 0, paddingTop: 0 }}
        animate={isOpen ? { height: 250, paddingTop: 16 } : { height: 0 }}
        transition={{ delay: isOpen ? 0 : 0.1, duration: isOpen ? 0.4 : 0.6 }}
      >
        {
          NavLinks.map((item: NavLinkTypes, i: number) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, display: 'none' }}
              animate={isOpen ? { opacity: 1, display: 'block' } : { opacity: 0, display: 'none' }}
              transition={{ delay: isOpen ? i * 0.1 : (NavLinks.length - i) * 0.1 }}
            >
              <Button onClick={() => setIsOpen(false)} noStyle link={item.url}>
                <div className="p-3 rounded-xl hover:bg-[#e9e8e478] transition">
                  {item.text}
                </div>
              </Button>
            </motion.div>
          ))
        }
      </motion.div>
    </nav>
  )
}

export default Navbar