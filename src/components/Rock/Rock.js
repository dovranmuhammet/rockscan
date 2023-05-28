import React, { useState } from "react";

const Rock = ({ rock, data, extractActive }) => {
  const [rockWikiData, setRockWikiData] = useState();
  const wikipediaUrl = `https://en.wikipedia.org/wiki/${rock.name.replace(
    / /g,
    "_"
  )}`;

  return (
    <div className="rock-container">
      <div className="rock-image-container">
        <img src={rock?.wikiImage} alt={rock.name} />
      </div>
      <div className="rock-body">
        <h2>{rock.name}</h2>
        <p>{rock.description}</p>
        {/* <button className="wikipedia-btn">Read more from Wikipedia</button> */}

        <div className="rock-wikipedia-info">
          <p>
            {extractActive && rock.wikiExtract + "\n"}
            <a href={wikipediaUrl} target="_blank" rel="noopener noreferrer">
              Wikipedia
            </a>
          </p>
        </div>
      </div>
      {/* Add more rock details here */}
    </div>
  );
};

export default Rock;
