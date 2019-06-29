import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  margin: 6rem 0 1rem 0;
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
