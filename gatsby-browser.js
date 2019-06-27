
import React from "react"
import styled from 'styled-components'
import { DatenProvider } from "./src/context/DatenContext"

export const wrapRootElement = ({ element }) => (
  <DatenProvider>{element}</DatenProvider>
)
