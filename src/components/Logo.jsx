import React from 'react'
import logo from '/logo.webp'

const Logo = ({width='100px'}) => {
  return (
   
    <img width={width} src={logo} alt="Logo" />
  )
}

export default Logo