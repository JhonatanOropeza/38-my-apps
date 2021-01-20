import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ className }) => {
    const data = useStaticQuery(
        graphql`
        query {
            desktop: file(relativePath: { eq: "3_architecture.jpg" }) {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1920) {
                  src
                }
              }
            }
          }
        `
    )

    // Set ImageData.
    const imageData = data.desktop.childImageSharp.fluid;
    return (
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
        >
        </BackgroundImage>
    )
}

const StyledBackgroundSection = styled(BackgroundSection)`
    background-position: bottom;
    background-size: cover;
    width: 100%;
    height: 600px;
    overflow: hidden;
  `

export default StyledBackgroundSection


