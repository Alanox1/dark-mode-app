import { createContext, useState } from "react";

export const DarkMode = createContext()

const DarkModeProvider = ({children}) => {
  const [ color, setColor ] = useState(true)
  
  const data = {
    color,
    setColor
  }
  
  return (
    <DarkMode.Provider value={data}>
        {children}
    </DarkMode.Provider>
  )
}

export default DarkModeProvider