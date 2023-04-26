/* global bootstrap */

import React, { useEffect, useState } from "react";

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
import "./places/scripts";

function App() {
  const [jsonDB, setJsonDB] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  let dbURL;
  dbURL = process.env.REACT_APP_DATABASE_URL;

  // Load JSON file
  useEffect(() => {
    async function fetchJsonData() {
      try {
        if (!dbURL) {
          // Load JSON data from the local file in development mode
          const jsonDB = require("./dev-data/database.json");
          setJsonDB(jsonDB);
          // console.log("LOCAL");
        } else {
          // Load JSON data from the server in production mode
          const response = await fetch(dbURL);
          if (!response.ok) {
            throw new Error("Failed to fetch JSON data from server");
          }
          const jsonDB = await response.json();
          setJsonDB(jsonDB);
          // console.log("URL");
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

  // Function to initialize the scrollspy
  function initializeScrollSpy() {
    const navigationElement = document.body.querySelector("#mainNav");
    if (navigationElement) {
      new bootstrap.ScrollSpy(document.body, {
        target: "#mainNav",
        offset: 74,
      });
    }
  }

  // Function to initialize the navbar toggler
  // Collapse responsive navbar when toggler is visible
  function initializeNavbarToggler() {
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    if (navbarToggler) {
      const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
      );
      responsiveNavItems.forEach(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
          if (window.getComputedStyle(navbarToggler).display !== "none") {
            navbarToggler.click();
          }
        });
      });
    }
  }

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
    </div>
  );
}

export default App;
