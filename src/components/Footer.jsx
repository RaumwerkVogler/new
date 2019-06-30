import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
position:relative;
background:rgba(255,255,255,.9);
bottom:0;left:0;right:0;
  margin: 11rem 0 1rem 0;
  padding: 1rem ${props => props.theme.spacer.horizontal};
  text-align: center;
  color: ${props => props.theme.colors.grey};
  a {
    text-decoration: none;
    color: ${props => props.theme.brand.primary};
  }
`

const Footer = () => (
  <Wrapper data-testid="footer">

    Luz de Mar, 55422 Bacharach, Langstr. 18<br/>

  Tel: 06743-9090718 <br/>
  Mobil: 0152-18981398<br/>
  Email: luzdemar.info@gmail.com<br/>
  </Wrapper>
)

export default Footer
