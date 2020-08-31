import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BlogCard from "./BlogCard"

const query = graphql`
  {
    allContentfulPost(limit: 3, sort: { fields: createdAt }) {
      totalCount
      edges {
        node {
          author
          id
          title
          slug
          subtitle
          image {
            fluid(maxWidth: 700, quality: 100) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          childContentfulPostContentRichTextNode {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`

const LatestBlog = () => {
  const data = useStaticQuery(query)
  const { edges } = data.allContentfulPost

  return (
    <div className="d-flex">
      {edges.map((node, i) => {
        return <BlogCard key={i} blog={node} />
      })}
    </div>
  )
}

export default LatestBlog
