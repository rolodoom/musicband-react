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

import band from "./dev-data/band.json";
import masthead from "./dev-data/masthead.json";
import videos from "./dev-data/videos.json";
import releases from "./dev-data/releases.json";
import musicians from "./dev-data/musicians.json";
import gallery from "./dev-data/gallery.json";
import bios from "./dev-data/bio.json";

function App() {
  return (
    <div className="App">
      <div id="page-top">
        <Navigation logo={band.logo} />
        <Masthead bgImage={masthead.bgImage} />
        <Videos videos={videos} />
        <Releases releases={releases} streaming={band.streaming} />
        <Bio bios={bios} />
        <Musicians musicians={musicians} />
        <Gallery gallery={gallery} />
        <Contact band={band} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
