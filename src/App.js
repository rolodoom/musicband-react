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

import infoData from "./dev-data/info.json";
import mastheadData from "./dev-data/masthead.json";
import videoData from "./dev-data/videos.json";
import releasesData from "./dev-data/releases.json";
import musiciansData from "./dev-data/musicians.json";
import galleryData from "./dev-data/gallery.json";
import bioData from "./dev-data/bio.json";
import contactData from "./dev-data/contact.json";

const releaseDataObj = {
  ...releasesData,
  streaming: infoData.band.streaming,
};

const contactDataObj = {
  ...contactData,
  press: infoData.band.press,
  social: infoData.band.social,
};

const footerData = {
  bandName: infoData.band.name,
  credits: infoData.credits,
};

function App() {
  return (
    <div className="App">
      <div id="page-top">
        <Navigation logo={infoData.band.logo} />
        <Masthead data={mastheadData} />
        <Videos data={videoData} />
        <Releases data={releaseDataObj} />
        <Bio data={bioData} />
        <Musicians data={musiciansData} />
        <Gallery data={galleryData} />
        <Contact data={contactDataObj} />
        <Footer data={footerData} />
      </div>
    </div>
  );
}

export default App;
