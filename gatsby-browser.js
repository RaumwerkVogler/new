
import React from "react"

import { DatenProvider } from "./src/context/DatenContext"

export const wrapRootElement = ({ element }) => (
  <DatenProvider>{element}</DatenProvider>
)
