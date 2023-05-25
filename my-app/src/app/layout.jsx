import Header from '@/components/header'
import './globals.css'
import React from 'react'

const Layout = ({children}) => {
  return (
   <html>
    <title>Movie App</title>
    <body>
      <Header />
      {children}
    </body>
   </html>
  )
}

export default Layout