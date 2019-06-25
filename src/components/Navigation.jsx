import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { FaInstagram,FaFacebook } from 'react-icons/fa'
import styled from 'styled-components'
import config from '../../config/website'
const Inhalt = styled.div`
 display:flex;
 flex-direction:column;
 padding:10px 0 30px 0px;
 max-width:50rem;
 margin: 30px auto;

`
const Wrapper = styled.header`
  align-items: center;
  display: flex;
  padding: 1rem 0 1rem 0;
  position: relative;

  z-index: 1000;
  a {
    color: ${props => props.theme.colors.black};
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    z-index: 100;
    font-weight:100;
    &:hover {
      color: ${props => props.theme.brand.primary};
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 1rem 0 1rem 0;
    flex-wrap: wrap;
  }
`

const Nav = styled.nav`
  display: flex;
  flex: 1;
  justify-content: flex-start;
  padding: 0 ${props => props.theme.spacer.horizontal};
  a:not(:first-child) {
    margin-left: 1rem;

  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 2;
  }
`

const Name = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  a {
    font-size: 1.25rem;
    font-family: 'Merriweather', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    font-weight: 700;
    &:hover,
    &:focus {
      color: ${props => props.theme.colors.body_color};
      text-decoration: none;
    }
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 1;
    flex: 1 0 100%;
    margin-bottom: 0.75rem;
  }
`

const SocialMedia = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  padding: 0 ${props => props.theme.spacer.horizontal};
  a {
    font-size: 1.25rem;
    line-height: 20px;
  }
  a:not(:first-child) {
    margin-left: 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 1rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.xs}) {
    order: 3;
  }
`

// Grabs all MDX files from src/pages and puts them into the navigation

const Navigation = () => {
  const data = useStaticQuery(query)

  return (
    <>
    <Wrapper data-testid="navigation">


      <SocialMedia>
        <a
          href="https://www.instagram.com/lekoarts.de"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.instagram.com/lekoarts.de"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaFacebook />
        </a>



      </SocialMedia>
      <Nav>
        {data.nav.nodes.map((n, index) => (
          <Link key={n.fields.slug} to={n.fields.slug} data-testid={`navItem-${index}`} activeClassName="nav-active">
            {n.frontmatter.title}
          </Link>
        ))}
      </Nav>
    </Wrapper>
    <Inhalt><h1 style={{fontWeight:200,letterSpacing:'.61rem',fontSize:'1.4rem',margin:'20px'}}><Link to="/">LUZ de MAR <br/>
    <span style={{fontSize:'1rem',fontWeight:100}}>Das spanische Restaurant in Bacharach</span></Link></h1></Inhalt>
    </>
  )
}

export default Navigation

const query = graphql`
  query NavLinks {
    nav: allMdx(filter: { fields: { sourceInstanceName: { eq: "pages" } } }) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
`
