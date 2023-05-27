import Banner from "./Banner/Banner";
import IdentifyRock from "./IdentifyRock/IdentifyRock";
import SuperRichDatabase from "./SuperRichDatabase/SuperRichDatabase";
import ExclusiveConsultation from "./IdentifyRock/ExclusiveConsultation";
import GetRockIdentifierNow from "./GetRockIdentifierNow/GetRockIdentifierNow";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";

function Home() {
  return (
    <div>
      <Banner />
      <IdentifyRock />
      <SuperRichDatabase />
      <ExclusiveConsultation />
      <GetRockIdentifierNow />
      <FAQ />
      <Footer />
    </div>
  );
}

export default Home;
