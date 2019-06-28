import React from 'react'
import {graphql} from 'gatsby'
import { Layout, SEO,Container, Hero, BGImage} from '../components'
//import config from '../../config/website'
import styled from 'styled-components'
import { animated, useSpring, config } from 'react-spring'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import Bild from './hi2.jpg'
import Img from 'gatsby-image'

const Back = {
  backgroundImage:`url(${Bild})`,
  backgroundSize:'cover',


}

const Kritik = (props)=>(

  <div style={{marginBottom:'30px'}}>
    <h2 style={{fontSize:'1.12rem'}}>{props.name}</h2>
    <p>{props.kritik}</p>
    <hr/>
  </div>
)

const Wrapper=styled.div`
display:flex;
flex-direction:column;
height:500px
overflow:auto;


padding:20px;
  max-width:800px;
  margin:30px auto;
  background:rgba(122,122,122,.7);
  color:white;
`
const Kritiken = ({data,location}) => {
  let daten = data.allAirtable.edges
  console.log(daten)
  return(
    <div style={Back}>
<Layout location={location.pathname} customSEO>

<Wrapper >

<h1 style={{fontWeight:200,fontSize:'1.4rem'}}>
  Das schreiben unsere Gäste
</h1>
{<SEO pathname={location.pathname} />}

  {

     daten.map(item => {
       return(
         <div >
           <Kritik key={item.node.recordId} name={item.node.data.Name} kritik={item.node.data.Kritik} />


         </div>
       )
     })
  }

  </Wrapper>

  </Layout>
  </div>


)}
export default Kritiken

export const query = graphql`
query {
  allAirtable(filter: {table: {eq: "Kritik"}}) {
     edges {
      node {
        recordId
        data {
          Name
          Kritik
        }
      }
    }
  }
}`
