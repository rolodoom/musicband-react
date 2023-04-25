import React from "react";

import VideoItem from "../components/VideoItem";

import {
  getLatestItem,
  getSortedItemsWithoutLatest,
} from "../../shared/util/filter";

import { getInlineSectionStyles } from "../../shared/util/format";

function Videos({
  data: { videos, title, subtitle, bgImage, colors, className },
}) {
  // Inline section colors
  const styles = getInlineSectionStyles(colors, bgImage);
  const classes = `videos page-section ${className ? className : ""}`;

  const sortedVideos = getSortedItemsWithoutLatest([...videos]);
  const latestVideo = getLatestItem(videos);

  return (
    <section className={classes} id="videos" style={styles}>
      <div className="container">
        <div className="text-center">
          <h2 className="section-heading text-uppercase">
            {title || "Videos"}
          </h2>
          <h3 className="section-subheading">{subtitle || ""}</h3>
        </div>
        <div className="row">
          <div className="d-none d-xl-block col-xl-1"></div>
          <div className="col-xl-10">
            <div className="pb-md-3 pb-lg-4 pb-xl-5">
              <VideoItem video={latestVideo} feature={true} />
            </div>
          </div>
          <div className="d-none d-xl-block col-xl-1"></div>
        </div>
        <div className="row videos-secondary">
          {sortedVideos.map((video) => {
            return (
              <div className="col-xxl-3 col-xl-4 col-sm-6" key={video.id}>
                <VideoItem video={video} feature={false} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Videos;
