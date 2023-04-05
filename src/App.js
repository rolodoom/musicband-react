import Navigation from "./places/sections/Navigation";
import Masthead from "./places/sections/Masthead";
import Videos from "./places/sections/Videos";
import Releases from "./places/sections/Releases";
import Bio from "./places/sections/Bio";
import Musicians from "./places/sections/Musicians";
import Gallery from "./places/sections/Gallery";
import Contact from "./places/sections/Contact";
import Footer from "./places/sections/Footer";

import "./scss/styles.scss";

import DB from "./dev-data/database.json";

const releaseDataObj = {
  ...DB.releases,
  streaming: DB.band.streaming,
};

const contactDataObj = {
  ...DB.contact,
  press: DB.band.press,
  social: DB.band.social,
};

const footerDataObj = {
  bandName: DB.band.name,
  credits: DB.credits,
};

function App() {
  return (
    <div className="App">
      <div id="page-top">
        <Navigation logo={DB.band.logo} />
        <Masthead data={DB.masthead} />
        <Videos data={DB.videos} />
        <Releases data={releaseDataObj} />
        <Bio data={DB.bio} />
        <Musicians data={DB.musicians} />
        <Gallery data={DB.gallery} />
        <Contact data={contactDataObj} />
        <Footer data={footerDataObj} />
      </div>
    </div>
  );
}

export default App;
