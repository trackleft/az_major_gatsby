import React from "react"
import {graphql } from "gatsby"
import Container from "../components/container"

const Majors = ({ data }) => (
    <Container>
      <h1>Majors</h1>
      <ul>
        {data.majors.edges.map(({ node }) => (
          <li key={node.field_uarizona_major_uuid}>
            <h3>{node.title} - {node.field_uarizona_major_uuid}</h3>
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
        }
      }
    }
  }
`
