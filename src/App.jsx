import { useEffect, useState } from 'react';
import './scss/styles.scss';

import Message from './components/shared/Message.jsx';
import Navigation from './components/places/Navigation.jsx';
import Masthead from './components/places/Masthead.jsx';
import Videos from './components/places/Videos.jsx';
import Releases from './components/places/Releases.jsx';
import Bio from './components/places/Bio.jsx';
import Musicians from './components/places/Musicians.jsx';
import Gallery from './components/places/Gallery.jsx';
import Contact from './components/places/Contact.jsx';
import Footer from './components/places/Footer.jsx';
import usePageMetadata from './utils/usePageMetadata.js';

import './utils/scripts.js';

import {
  initializeNavbarToggler,
  initializeScrollSpy,
} from './utils/scroll.js';

function App() {
  const [jsonDB, setJsonDB] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const dbURL = import.meta.env.VITE_DATABASE_URL;

  // Load JSON file
  useEffect(() => {
    async function fetchJsonData() {
      try {
        if (!dbURL) {
          // Load JSON data from the local file in development mode
          const { default: jsonDB } = await import('./dev-data/database.json');

          setJsonDB(jsonDB);
        } else {
          // Load JSON data from the server in production mode
          const response = await fetch(dbURL);
          if (!response.ok) {
            throw new Error('Failed to fetch JSON data from server');
          }
          const jsonDB = await response.json();
          setJsonDB(jsonDB);
        }
        // Activate Bootstrap scrollspy on the main nav element
        // Call the function to initialize the scrollspy after the data has been loaded
        setTimeout(() => {
          initializeScrollSpy();
          initializeNavbarToggler();
        }, 10);
      } catch (error) {
        setErrorMessage(`Error loading data: ${error.message}`);
      }
    }

    fetchJsonData();
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

  return (
    <div className="App">
      {jsonDB ? (
        <div id="page-top">
          <Navigation data={jsonDB} />
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
