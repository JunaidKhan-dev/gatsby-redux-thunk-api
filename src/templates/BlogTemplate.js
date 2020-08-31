import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import ReactHtmlParser from "react-html-parser"
import Layout from "../components/layout"

export const query = graphql`
  query MyBlogQuery($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      author
      id
      slug
      title
      subtitle
      content {
        childContentfulRichText {
          html
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`

const BlogTemplate = props => {
  const {
    author,
    id,
    slug,
    title,
    subtitle,
    content,
    image,
  } = props.data.contentfulPost

  return (
    <Layout>
      <h2>{title}</h2>
      <h4>{subtitle}</h4>
      <Image fluid={image.fluid} />
      <div className="rich-text">
        {ReactHtmlParser(content.childContentfulRichText.html)}
      </div>
    </Layout>
  )
}

export default BlogTemplate
