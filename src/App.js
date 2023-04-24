import { useEffect, useState } from "react";

import usePageMetadata from "./shared/util/usePageMetadata";

import Message from "./shared/components/UIElements/Message";

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

function App() {
  const [jsonDB, setJsonDB] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const dbURL = process.env.REACT_APP_DATABASE_URL;

  // Load JSON file
  useEffect(() => {
    fetch(dbURL)
      .then((response) => response.json())
      .then((data) => setJsonDB(data))
      .catch((error) => {
        setErrorMessage(`Error loading data from server.`);
      });
  }, [dbURL]);

  // Change page metadata
  usePageMetadata(jsonDB);

  // Extract the relevant portions of the data into separate variables or objects
  const releaseDataObj = {
    ...jsonDB?.releases,
    streaming: jsonDB?.band.streaming,
  };

  const contactDataObj = {
    ...jsonDB?.contact,
    press: jsonDB?.band.press,
    social: jsonDB?.band.social,
  };

  const footerDataObj = {
    bandName: jsonDB?.band.name,
    credits: jsonDB?.credits,
  };

  const navigationDataObj = {
    bandName: jsonDB?.band.name || "MusicBand",
    logo: jsonDB?.band.logo || "/assets/img/navbar-logo.svg",
    items: {
      videos: jsonDB?.videos.title || "Videos",
      releases: jsonDB?.releases.title || "Releases",
      bio: jsonDB?.bio.title || "Biography",
      musicians: jsonDB?.musicians.title || "Musicians",
      gallery: jsonDB?.gallery.title || "Gallery",
      contact: jsonDB?.contact.title || "Contact",
    },
  };

  return (
    <div className="App">
      {jsonDB ? (
        <div id="page-top">
          <Navigation data={navigationDataObj} />
          <Masthead data={jsonDB.masthead} />
          <Videos data={jsonDB.videos} />
          <Releases data={releaseDataObj} />
          <Bio data={jsonDB.bio} />
          <Musicians data={jsonDB.musicians} />
          <Gallery data={jsonDB.gallery} />
          <Contact data={contactDataObj} />
          <Footer data={footerDataObj} />
        </div>
      ) : errorMessage ? (
        <Message>{errorMessage}</Message>
      ) : (
        <Message>Loading data...</Message>
      )}
    </div>
  );
}

export default App;
