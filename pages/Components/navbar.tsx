import Link from "next/link"
import { motion } from "framer-motion"
import navbar from "./navbar.module.css"
import Image from "next/image"
import menuImg from "../../public/images/menu.png"
import { useState } from "react"
export default function Navbar() {
  const [isVisable, setIsVisable] = useState(false)
  const toggleVisable = () => {
    setIsVisable(!isVisable)
  }

  const MotionLink = motion(Link)
  return (
    <header>
      <h1>
        <Link href="/">Ethan.dev</Link>
      </h1>
      <div className={navbar.dropdown}>
        <motion.button
          whileTap={{ scale: 0.7 }}
          className={navbar.dropbtn}
          onClick={toggleVisable}
        >
          <Image
            className={navbar.menuImage}
            src={menuImg}
            width="33"
            height="33"
            alt="Image of dropdown menu"
          ></Image>
        </motion.button>
        {isVisable === true && (
          <div className={navbar.dropdownContent}>
            <MotionLink
              onClick={toggleVisable}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              href="/"
            >
              About
            </MotionLink>
            <MotionLink
              onClick={toggleVisable}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              href="/projects"
            >
              Projects
            </MotionLink>{" "}
            <MotionLink
              onClick={toggleVisable}
              whileHover={{ scale: 0.9 }}
              whileTap={{ scale: 0.9 }}
              href="/contact"
            >
              Contact
            </MotionLink>
          </div>
        )}
      </div>

      <nav className={navbar.navSection}>
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
