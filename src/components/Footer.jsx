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
    Copyright &copy; 2019. All right reserved.<br/> Pictures by Rene Broich.{' '}
    Website made by Rene Broich. Bacharach.<br/>
    Kontakt: renbroi@icloud.com <br/>
  
  </Wrapper>
)

export default Footer
