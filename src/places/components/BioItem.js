import React from "react";

import { formatStringWithBreaks } from "../../shared/util/format";

const BioItem = ({ bio, isOdd, isLast }) => {
  return (
    <li className={`${isOdd && "timeline-inverted"}`}>
      <div className="timeline-image">
        {!isLast ? (
          <img className="rounded-circle img-fluid" src={bio.image} alt="" />
        ) : (
          <h4
            dangerouslySetInnerHTML={{
              __html: formatStringWithBreaks(bio.title),
            }}
          />
        )}
      </div>
      {!isLast && (
        <div className="timeline-panel">
          <div className="timeline-heading">
            <h4>{bio.title}</h4>
            <h4 className="subheading">{bio.subtitle}</h4>
          </div>
          <div className="timeline-body">
            <p
              dangerouslySetInnerHTML={{
                __html: formatStringWithBreaks(bio.description),
              }}
            />
          </div>
        </div>
      )}
    </li>
  );
};

export default BioItem;
