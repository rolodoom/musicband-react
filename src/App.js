import usePageMetadata from "./shared/util/usePageMetadata";

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

const navigationDataObj = {
  bandName: DB.band.name || "MusicBand",
  logo: DB.band.logo || "/assets/img/navbar-logo.svg",
  items: {
    videos: DB.videos.title || "Videos",
    releases: DB.releases.title || "Releases",
    musicians: DB.musicians.title || "Musicians",
    bio: DB.bio.title || "Biography",
    gallery: DB.gallery.title || "Gallery",
    contact: DB.contact.title || "Contact",
  },
};

console.log(navigationDataObj);

function App() {
  usePageMetadata({
    sitename: DB.band.name || "MusicBand",
    description: DB.band.description || "A musician page theme",
    slogan: DB.band.description || "A musician page theme",
  });

  return (
    <div className="App">
      <div id="page-top">
        <Navigation data={navigationDataObj} />
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
