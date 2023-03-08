import Navigation from "./sections/Navigation";
import Masthead from "./sections/Masthead";
import Videos from "./sections/Videos";
import Music from "./sections/Music";
import Bio from "./sections/Bio";
import Musicians from "./sections/Musicians";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="App">
      <div id="page-top">
        <Navigation />
        <Masthead />
        <Videos />
        <Music />
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
