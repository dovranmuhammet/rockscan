import RockList from './components/RockList/RockList'
import { Router, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import './App.css'
import Navbar from './components/header/Navbar'
import Footer from './components/Footer/Footer'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import GeoWonder from './components/GeoWonder/GeoWonder'
import RockExpanse from './components/RockExpanse/RockExpanse'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rocks' element={<RockList />} />
        <Route path='/geowonder' element={<GeoWonder />} />
        <Route path='./rockexpanse' element={RockExpanse} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
