
import React from "react"
import styled from 'styled-components'
import {MDXProvider} from '@mdx-js/react'
import { DatenProvider } from "./src/context/DatenContext"

import './src/styles/global.css'


const components = {
 h2: props =>(
  <h2 style={{color:'hotpink',fontSize:'1.2rem'}} {...props} />
),
p: props =>(
 <p style={{color:'black',fontSize:'.9rem'}} {...props} />
),
li: props =>(
 <li style={{fontStyle:'italc',fontSize:'.9rem'}} {...props} />
)
}
export const wrapRootElement = ({ element }) => {
return (

  <DatenProvider>
<MDXProvider components={components}>
{element}
</MDXProvider>
  </DatenProvider>


)}
