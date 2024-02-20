import Link from "next/link"

export default function Navbar() {
  return (
    <header>
      <h1>
        <Link href="/">Ethan.dev</Link>
      </h1>
      <nav className="navbar">
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
