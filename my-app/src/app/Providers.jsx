import React from 'react'
import {ThemeProvider} from 'next-thems'

function Providers() {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}

export default Providers