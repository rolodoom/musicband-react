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

import DUMMY_BANDINFO from "./dev-data/band-info.json";

function App() {
  return (
    <div className="App">
      <div id="page-top">
        <Navigation logo={DUMMY_BANDINFO.logo} />
        <Masthead bgImage={DUMMY_BANDINFO.masthead.bgImage} />
        <Videos videos={DUMMY_BANDINFO.videos} />
        <Releases releases={DUMMY_BANDINFO.releases} />
        <Bio />
        <Musicians musicians={DUMMY_BANDINFO.musicians} />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
