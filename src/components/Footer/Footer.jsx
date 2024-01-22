import React, { useContext } from 'react'
import "./footer.css"
import { DarkMode } from '../../Context/DarkMode'
const Footer = () => {

  const { color } = useContext(DarkMode)
  return (
    <div className={`footer ${color ? "clear" : "dark"}`}>Hecho con ❤️ por Alan</div>
  )
}

export default Footer