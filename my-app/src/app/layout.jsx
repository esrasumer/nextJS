import './globals.css'
import React from 'react'

const Layout = ({children}) => {
  return (
   <html>
    <title>Movie App</title>
    <body>
      {children}
    </body>
   </html>
  )
}

export default Layout