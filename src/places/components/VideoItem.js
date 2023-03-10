import React from "react";

import { getYouTubeThumbnailUrl, formatDate } from "../../shared/util/format";

const VideoItem = ({ video, feature }) => {
  const formattedDate = formatDate(video.publishedDate);

  return (
    <div className="video-item">
      <a
        className="video-link"
        href={`https://www.youtube.com/watch?v=${video.id}`}
        data-fancybox
      >
        <div className="video-hover">
          <div className="video-hover-content">
            <i
              className={`fas fa-play ${feature && "fa-3x"} ${
                !feature && "fa-2x"
              }`}
            ></i>
          </div>
        </div>
        <img
          className="img-fluid"
          src={getYouTubeThumbnailUrl(video.id)}
          alt=""
        />
      </a>
      <div className="video-caption">
        <div className="video-caption-heading">{video.title}</div>
        {video.subtitle && (
          <div className="video-caption-subheading text-muted">
            {video.subtitle}
          </div>
        )}
        <div className="video-caption-date text-muted">{formattedDate}</div>
      </div>
    </div>
  );
};

export default VideoItem;
