import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { animated } from 'react-spring'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Item = styled(animated.div)`
  position: relative;

  &:before {
    content: '';
    display: block;
    padding-top: 100%;
  opacity:0;
  }

`
const Zeig = styled.div`

overflow:scroll;
 width:100%;
height:100%;
 margin:0;
 padding:0;
`
const Content = styled.div`
overflow:scroll;

height:100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  > p {
    opacity:1;

  }
  a {
    color: #fff;
    height: 100%;
    left: 0;

    padding: 2rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 10;
    transition: all 0.3s ease-in-out;
    text-decoration: none;
  opacity: 0;
    &:hover {
      color: #fff;
      opacity: 1;
      text-decoration: none;
    }
  }
  h2 {
    margin-top: 0;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`

const ImageWrapper = styled.div`
  > div {
height:100%;

    left: 0;
    position: absolute !important;
    top: 0;
    width: 100%;

    > div {
      position: static !important;

    }
  }
`

const Overlay = styled.div`
  background-color: ${props => props.theme.brand.primary};
height:40%;

  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -2;
`

const TracedGlow = styled.img`
  position: absolute;
  width: 100%;


  object-fit: cover;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.08;
  filter: invert(100%);
  z-index: -1;
`



const Hinweisen= ({mslug}) => {
switch (mslug) {
  case "/speisen":
  return(

    <p>Mediterrane Speisen nach spanischer Art. <br/>Immer frisch zubereitet...</p>

  )
    break;
          case "/lage":
          return(

            <p>Eingang auf der schönen historischen Stadtmauer von Bacharach</p>

          )
      break;
          case "/kritik":
          return(
            <p>Restaurantkritik verfassen?<br/>Lob und Kritik gleichermaßen willkommen.</p>
           )
        break;
            case "/wir":
            return(
              <p> Wir bemühen uns, allen Ansprüchen unserer Kunden gerecht zu werden.</p>
             )
        break;
            case "/tisch":
            return(
              <p>Gerne reservieren wir für Sie einen Tisch. Bitte dafür alle notwendigen Daten eingebem </p>
             )
              break;
          case "/speisen":
              return(
                <p>Wir bereiten nur Lebensmittel von bester Qualität zu.</p>)
                break;
          case "/cocktails":
                    return(
                      <p>Leckere Cocktails mit und ohne Alkohol</p>)
                      break;
          case "/veranstaltung":
                      return(
                       <p>Veranstaltung ab September, wenn der Tourismusandrang nachlässt.</p>)
                      break;
  default:null

}
return null
}


const ProjectItem = ({ node, style, testid }) =>{

  return (
  <Item key={node.fields.slug} style={style} data-testid={testid}>


    <Content>

      <ImageWrapper>

        <Img fluid={node.frontmatter.cover.childImageSharp.fluid} />

      </ImageWrapper>
      <p style={{position:'relative',fontSize:'1rem',fontWeight:100,op:0,margin:0,background:`${node.frontmatter.color}`,zIndex:4000,color:'white',padding:'15px'}}><Link style={{fontSize:'1rem',padding:'5px 5px',opacity:1,color:'black',backgroundColor:'rgba(255,255,255,.6)'}} to={node.fields.slug}>  &rarr; {node.frontmatter.title}</Link></p>
      <Link to={node.fields.slug}>

            <Hinweisen mslug={node.fields.slug} />

        <TracedGlow src={node.frontmatter.cover.childImageSharp.fluid.tracedSVG} alt="" />
        <Overlay style={{ backgroundColor: node.frontmatter.color }} />
      </Link>

    </Content>
  </Item>
)}

export default ProjectItem

ProjectItem.propTypes = {
  node: PropTypes.object.isRequired,
  style: PropTypes.object.isRequired,
  testid: PropTypes.string.isRequired,
}
