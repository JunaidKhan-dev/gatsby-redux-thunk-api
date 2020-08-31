import React from "react"
import styles from "../styles/blogcard.module.scss"
import { Link } from "gatsby"
import Image from "gatsby-image"
const BlogCard = ({ blog }) => {
  const {
    author,
    id,
    slug,
    subtitle,
    title,
    image,
    childContentfulPostContentRichTextNode,
  } = blog.node

  return (
    <div className={styles.blogcard} id={id}>
      <h3>{title}</h3>
      <h5>{subtitle}</h5>
      <h6>{author}</h6>
      <div className={styles.imageholder}>
        <Image fluid={image.fluid} />
      </div>
      <Link to={`/blogs/${slug}`}>{title}</Link>
    </div>
  )
}

export default BlogCard
