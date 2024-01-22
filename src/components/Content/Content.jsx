import {useContext} from 'react'
import "./content.css"
import { DarkMode } from '../../Context/DarkMode'
import { Gallery } from '../../Context/Gallery'
import Image from '../Image/Image'


const Content = () => {
  const { color } = useContext(DarkMode)

  const {imagenes} = useContext(Gallery)
  return (
    <div className={`content ${color ? "clear" : "dark"}`}>
     <div className='image-container'>
        {imagenes.map(el => {
          {return color !== el.isDark
            ? <Image img={el.img} />
            : ""}      
          })} 
     </div>   
    </div>
  )
}

export default Content