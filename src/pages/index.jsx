/* eslint react/display-name: 0 */
//import 'core-js'
//import 'regenerator-runtime/runtime'
import React from 'react'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { useTrail } from 'react-spring'
import styled from 'styled-components'
import { Layout, ProjectItem } from '../components'
import { Grid, Row, Col } from 'react-flexbox-grid';


const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  width: 100%;
`




const Index = ({
  data: {
    allMdx: { nodes: projectEdges },
  },
  location,
}) => {

  const trail=projectEdges
  // const trail = useTrail(projectEdges.length, {
  //   from: { height: '0%' },
  //   to: { height: '100%' },
  // })
  return (
    <Layout pathname={location.pathname}>

      <Grid fluid>
      <Row>
        {trail.map((style, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
          <ProjectItem
            testid={`projectItem-${index}`}
            style={style}
            key={projectEdges[index].fields.slug}
            node={projectEdges[index]}
          />
        </Col>))}
        </Row>
      </Grid>
    </Layout>
  )
}

export default Index

Index.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          fields: PropTypes.shape({
            slug: PropTypes.string,
          }),
          frontmatter: PropTypes.shape({
            color: PropTypes.string,
            client: PropTypes.string,
          }),
        })
      ),
    }),
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export const pageQuery = graphql`
  query IndexQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { sourceInstanceName: { eq: "projects" } } }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          color
          title
          cover {
            childImageSharp {
              fluid(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`
