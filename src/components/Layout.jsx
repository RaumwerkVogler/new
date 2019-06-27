
import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import 'typeface-merriweather'
import 'typeface-roboto'
import SEO from './SEO'
import Navigation from './Navigation'
import Footer from './Footer'
import theme from '../../config/theme'
import reset from '../styles/reset'
import styled from 'styled-components'
import DatenContext from '../context/DatenContext'
import {Link} from 'gatsby'


const Hinweis = styled.div`
   display:flex;
   flex-direction:column;
   background-color:red;
   padding:20px;
   color:white;
   a {
     color:white;
     font-size:1rem;
   }
`
const Button = styled.button`
  padding:10px;
  border:none;
  background-color:white;
  color:black;
  cursor:pointer;
  width:200px;
  font-size:1.2rem;
  border-radius:6%;

`
const GlobalStyle = createGlobalStyle`
  ${reset}
  html {
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Merriweather", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }
  .nav-active {
    color: ${theme.brand.primary} !important;
  }
`

// We can pass customSEO here to not include the <SEO> component twice. This prop is 'true' on the project template
// as the SEO component there passes in some additional things. Otherwise things would be inserted two times

const Layout = ({ children, pathname, customSEO }) =>
{
 const [ein, setEin] = useState(0);
return(
  <ThemeProvider theme={theme}>
    <>
      {!customSEO && <SEO pathname={pathname} />}
      <GlobalStyle />
      <Navigation />
      <DatenContext.Consumer>
      {

        eintrag => (
        eintrag.ein === 0 ?
        <Hinweis>
          <h3>
            Auch wir nutzen Cookies und ...
          </h3>
          <p>Durch Klick auf den Zustimmungsbutton erkenne ich Ihre Datenschutzbestimmungen an.</p>
          <Button onClick={eintrag.toggleEinverstanden}> &rarr; zustimmen</Button>
          <p><Link to="/datenschutz">
          &rarr; Datenschutzbestimmungen lesen</Link></p>

        </Hinweis>:null
        )
       }
      </DatenContext.Consumer>

      {children}
      <Footer />
    </>
  </ThemeProvider>
)}

export default Layout

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  pathname: PropTypes.string.isRequired,
  customSEO: PropTypes.bool,
}

Layout.defaultProps = {
  customSEO: false,
}
