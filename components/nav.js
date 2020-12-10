import Link from "next/link"

export default function Nav() {
  return (
    <div id="nav">
      <Link id="home" href="/">
        <h2>HOME</h2>
      </Link>
      <Link id="about" href="/about">
        <h2>ABOUT</h2>
      </Link>
      <Link id="client-resources" href="/client-resources">
        <h2>CLIENT RESOURCES</h2>
      </Link>
      <Link id="community" href="/community">
        <h2>COMMUNITY</h2>
      </Link>
      <Link id="contact" href="/contact">
        <h2>CONTACT</h2>
      </Link>
    </div>
  )
}
