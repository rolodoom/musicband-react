import React from "react";
import { v4 as uuidv4 } from "uuid";

import GalleryItem from "../components/GalleryItem";
import { shuffleItems } from "../../shared/util/filter";

function Gallery({ data: { gallery } }) {
  const shuffleGallery = shuffleItems(gallery);
  return (
    <section className="portfolio page-section section-gallery" id="gallery">
      <div className="row g-0">
        {shuffleGallery.map((image) => {
          return (
            <div className="col-lg-2 col-md-3 col-sm-4" key={uuidv4()}>
              <GalleryItem image={image} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
