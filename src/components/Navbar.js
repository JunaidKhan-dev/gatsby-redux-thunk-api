import React from "react"
import styles from "../styles/navbar.module.scss"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className={styles}>
      <h1>Complex Gatsby</h1>
      <ul>
        <li>
          <Link activeClassName={styles.active} to="/">
            Home
          </Link>
          <Link activeClassName={styles.active} to="/blogs">
            Blogs
          </Link>
          <Link activeClassName={styles.active} to="/jokes">
            Jokes
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
