import Navigation from "./sections/Navigation";
import Masthead from "./sections/Masthead";
import Videos from "./sections/Videos";
import Releases from "./sections/Releases";
import Bio from "./sections/Bio";
import Musicians from "./sections/Musicians";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

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
        <Musicians />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
