import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const BackgroundSection = ({ fileName, className }) => {
    const data = useStaticQuery(
        graphql`
        query{
            desktop: allFile{
              edges{
                node{
                  relativePath
                  childImageSharp{
                    fluid{
                      src
                    }
                  }
                }
              }
            }
          }
        `
    )
    const imageData = data.desktop.edges.find(image => {
        return image.node.relativePath.includes(fileName);
    });
    if (!imageData) {
        console.log('No hay imagen')
        return null;
    }
    return (
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData.node.childImageSharp.fluid}
            backgroundColor={`#000`}
        > 
        </BackgroundImage>
    )
}

const StyledBackgroundSection = styled(BackgroundSection)`
    height: 230px;
    background-position: top;
    background-repeat: no-repeat;
`

export default StyledBackgroundSection


