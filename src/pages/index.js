import React from "react"
import {graphql } from "gatsby"
import Container from "../components/container"
//import Img from "gatsby-image"

function Image(props) {
  const hasImage = props.src;
  if (hasImage) {
    const src = 'https://gatsby-majorsdata.pantheonsite.io' + props.src.relationships.field_media_image.uri.url;
    const alt = props.src.field_media_image.alt;
    const title = props.src.field_media_image.title;
    return <img title={title} alt={alt} src={src} />;
  }
  return null;
}

const Majors = ({ data }) => (
    <Container>
      <h1>Majors</h1>
      <ul>
        {data.majors.edges.map(({ node }) => (
          <li key={node.field_uarizona_major_uuid}>
            <h3>{node.title} - {node.field_uarizona_major_uuid}</h3>
            <Image src={node.relationships.field_az_media} />
          </li>
        ))}
      </ul>
    </Container>
)

export default Majors

export const query = graphql`
  query {
    majors: allNodeUarizonaMajor(limit: 1000) {
      edges {
        node {
          title
          field_uarizona_major_uuid
          relationships {
            field_az_media {
              relationships {
                field_media_image {
                  uri {
                    url
                  }
                }
              }
              field_media_image {
                alt
                title
              }
            }
          }
        }
      }
    }
  }
`
