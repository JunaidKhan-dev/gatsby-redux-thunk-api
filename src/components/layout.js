import React from "react"
import { Helmet } from "react-helmet"
import "../styles/main.scss"
import Navbar from "./Navbar"

const layout = ({ children }) => {
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Navbar />
      <div className="container">{children}</div>
      <footer> &copy; junaid khan 2020</footer>
    </div>
  )
}

export default layout
