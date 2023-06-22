import RockList from './components/RockList/RockList'
import { Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Navbar from './components/header/Navbar'
import Footer from './components/Footer/Footer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import GeoClips from './components/GeoClips/GeoClips'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rocks' element={<RockList />} />
        <Route path='/geoclips' element={<GeoClips />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
