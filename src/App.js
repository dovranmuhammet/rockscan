import Navbar from './components/header/Navbar'
import Banner from './components/Banner/Banner'
import IdentifyRock from './components/IdentifyRock/IdentifyRock'
import SuperRichDatabase from './components/SuperRichDatabase/SuperRichDatabase'
import ExclusiveConsultation from './components/IdentifyRock/ExclusiveConsultation'
import GetRockIdentifierNow from './components/GetRockIdentifierNow/GetRockIdentifierNow'
import FAQ from './components/FAQ/FAQ'
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <IdentifyRock />
      <SuperRichDatabase />
      <ExclusiveConsultation />
      <GetRockIdentifierNow />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
