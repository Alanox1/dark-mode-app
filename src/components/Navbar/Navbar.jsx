import {useContext} from 'react'
import "./navbar.css"
import { DarkMode } from '../../Context/DarkMode'
const Navbar = () => {
  const { color, setColor} = useContext( DarkMode )
  
  return (
    <nav className={`${color ? "clear" : "dark"}`}>
        <h2>Dark mode app</h2>
        <p onClick={() => setColor(!color)}>{color ? "🌑" : "☀️"}</p> 
    </nav>
  )
}

export default Navbar