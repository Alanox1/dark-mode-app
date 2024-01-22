import { createContext, useState } from "react";

export const Gallery = createContext()

const data = [
    {
      id : 1,
      img : "https://images.pexels.com/photos/1169084/pexels-photo-1169084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isDark : false
    },
    {
        id : 2,
        img : "https://images.pexels.com/photos/837494/pexels-photo-837494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isDark : false
      },
      {
        id : 3,
        img : "https://images.pexels.com/photos/5320134/pexels-photo-5320134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isDark : false
      },
      {
        id : 4,
        img : "https://images.pexels.com/photos/674475/pexels-photo-674475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isDark : false
      },
      {
        id : 5,
        img : "https://images.pexels.com/photos/315938/pexels-photo-315938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isDark : true
      },
      {
        id : 6,
        img : "https://images.pexels.com/photos/746111/pexels-photo-746111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isDark : true
      },
      {
        id : 7,
        img : "https://images.pexels.com/photos/1453808/pexels-photo-1453808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isDark : true
      },
      {
        id : 8,
        img : "https://images.pexels.com/photos/1453801/pexels-photo-1453801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isDark : true
      },
      {
        id : 9,
        img : "https://images.pexels.com/photos/952632/pexels-photo-952632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isDark : false
      },
      {
        id : 10,
        img : "https://images.pexels.com/photos/1303216/pexels-photo-1303216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isDark : false
      },
      {
        id : 11,
        img : "https://images.pexels.com/photos/1716158/pexels-photo-1716158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isDark : true
      },
      {
        id : 12,
        img : "https://images.pexels.com/photos/1122628/pexels-photo-1122628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        isDark : true
      }
  ]

const GalleryProvider = ({children}) => {

  const [imagenes,setImagenes] = useState(data)

  
  return (
    <Gallery.Provider value={{imagenes,setImagenes}}>
        {children}
    </Gallery.Provider>
  )
}

export default GalleryProvider