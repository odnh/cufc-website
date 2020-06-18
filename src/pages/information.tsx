import React from "react"
import Heading from "../components/heading"
import Page from "../components/page"
import { graphql } from "gatsby"

export default function Information({ data }) {
  return (
    <Page>
      <Heading>
        Club information
      </Heading>
      <p>{data.allTextYaml.edges[0].node.information}</p>
    </Page>
  )
}

export const query = graphql`
query {
  allTextYaml {
    edges {
      node {
        information
      }
    }
  }
}
`