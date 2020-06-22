import React from "react"
import Heading from "../components/specialised/Heading"
import Page from "../components/specialised/Page"
import CommitteeCards from "../components/specialised/CommitteeCards"
import { graphql } from "gatsby"

export default function Committee({ data }) {
  return (
    <Page image={data.image.childImageSharp.fluid}>
      <Heading>
        The Committee
      </Heading>
      <p>If you have queries regarding any aspect of the club then feel free to contact any of the committee members listed below:</p>
      <CommitteeCards data={data.members.edges[0].node.committee}/>
    </Page>
  )
}

export const query = graphql`
  query {
    image: file(relativePath: { eq: "varsity_2020.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    members: allTextYaml {
      edges {
        node {
          committee {
            name
            role
            crsid
          }
        }
      }
    }
  }`
