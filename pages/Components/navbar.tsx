import Link from "next/link"
import { motion } from "framer-motion"
export default function Navbar() {
  return (
    <header>
      <h1>
        <Link href="/">Ethan.dev</Link>
      </h1>
      <nav className="navbar">
        <ul>
          <li>
            <motion.div
              whileHover={{
                scale: 1.2,
              }}
            >
              <Link href="/">About</Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{
                scale: 1.2,
              }}
            >
              <Link href="/projects">Projects</Link>
            </motion.div>
          </li>
          <li>
            <motion.div
              whileHover={{
                scale: 1.2,
              }}
            >
              <Link href="/contact">Contact</Link>
            </motion.div>
          </li>
        </ul>
      </nav>
    </header>
  )
}
