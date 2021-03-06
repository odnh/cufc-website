import React from "react";
import FlexRow from "../reusable/FlexRow";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import RowItem from "../reusable/RowItem";
import styled from "styled-components";

const Icon = styled(Img)`
  width: 100%;
  height: 100%;`

export default function PartnerIcons() {
  const query = useStaticQuery(graphql`
    query {
      kappa: file(relativePath: { eq: "kappa.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      vango: file(relativePath: { eq: "vango.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }`);
    const icons = [query.vango.childImageSharp.fluid, query.kappa.childImageSharp.fluid];
  return (
    <FlexRow css={`align-items: center;`}>{icons.map((icon) => <RowItem bases={[50, 50, 50, 50]}>{<Icon fluid={icon} />}</RowItem>)}</FlexRow>
  );
}