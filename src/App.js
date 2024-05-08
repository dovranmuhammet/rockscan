import RockList from './components/RockList/RockList'
import { Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Navbar from './components/header/Navbar'
import Footer from './components/Footer/Footer'
import PrivacyPolicy from './components/Footer/PrivacyPolicy'
import Terms from './components/Footer/Terms'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import GeoWonder from './components/GeoWonder/GeoWonder'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rocks' element={<RockList />} />
        <Route path='/geowonder' element={<GeoWonder />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms' element={<Terms />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
