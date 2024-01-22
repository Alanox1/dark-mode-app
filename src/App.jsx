import './App.css'
import DarkModeProvider from './Context/DarkMode'
import GalleryProvider from './Context/Gallery'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

function App() {


  return (
    <DarkModeProvider>
    <div className='contenedor'>
        <Navbar />
        <GalleryProvider>
          <Content />
        </GalleryProvider>
        <Footer />
    </div>
    </DarkModeProvider>
  
  )
}

export default App
