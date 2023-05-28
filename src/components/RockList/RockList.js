import React, { useState, useEffect } from "react";
import rockDataJson from "./rocks.json";
import axios from "axios";

// useEffect(() => {
//   fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${rockType}`)
//     .then((response) => response.json())
//     .then((data) => setData(data.extract))
//     .catch((error) => console.error(error));
// }, [rockType]);

const Rock = ({ rock, data }) => {
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
            {rock.wikiExtract + "\n"}
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

const RockList = () => {
  const [data, setData] = useState(null);
  const [rockData, setRockData] = useState(rockDataJson);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRocks = rockData.filter((rock) =>
    rock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  //   useEffect(() => {
  //     const getRockWikipediaData = async (name) => {
  //       const data = // await axios.get(
  //         //   `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exintro=&explaintext=&format=json&titles=${name}`
  //         // )
  //         (
  //           await axios.get(
  //             `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=pageimages%7Cdescription%7Cextracts&list=&titles=${name}&redirects=1&formatversion=2&piprop=original&pithumbsize=200&exintro=1&explaintext=1&exsentences=${5}`
  //           )
  //         ).data;
  //       let pages = data.query.pages;
  //       let page = pages[Object.keys(pages)[0]];
  //       // console.log(data.query.pages[0]);
  //       // console.log(firstHalf);
  //       return data.query.pages[0];
  //     };
  //     const getData = async () => {
  //       let newRockData = [];
  //       for (let i = 0; i < rockData.length; i++) {
  //         const rockWikiData = await getRockWikipediaData(rockData[i].name);
  //         //console.log(rockData[i].name);
  //         const newRockObj = {
  //           name: rockData[i].name,
  //           type: rockData[i].type,
  //           description: rockData[i].description,
  //           wikiExtract: rockWikiData.extract,
  //           wikiDescription: rockWikiData.description,
  //           wikiImage: rockWikiData.original?.source,
  //           image: "",
  //         };
  //         newRockData.push(newRockObj);
  //         console.log(newRockObj);
  //       }
  //       console.log(newRockData);
  //     };
  //     // getData();
  //   }, []);

  const getRockWikipediaData = async (name) => {
    const data = // await axios.get(
      //   `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exintro=&explaintext=&format=json&titles=${name}`
      // )
      (
        await axios.get(
          `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=pageimages%7Cdescription%7Cextracts&list=&titles=${name}&redirects=1&formatversion=2&piprop=original&pithumbsize=200&exintro=1&explaintext=1&exsentences=${5}`
        )
      ).data;
    let pages = data.query.pages;
    let page = pages[Object.keys(pages)[0]];
    // console.log(data.query.pages[0]);
    const wikiRock = data.query.pages[0];
    const newRockObj = {
      name: name,
      description: wikiRock.description,
      wikiExtract: wikiRock.extract,
      wikiImage: wikiRock.original?.source,
    };
    console.log(newRockObj);
    setRockData([newRockObj]);
    return wikiRock;
  };
  //   const getData = async () => {
  //     let newRockData = [];
  //       const rockWikiData = await getRockWikipediaData(rockData[i].name);
  //       //console.log(rockData[i].name);
  //       const newRockObj = {
  //         name: rockData.name,
  //         type: rockData[i].type,
  //         description: rockData[i].description,
  //         wikiExtract: rockWikiData.extract,
  //         wikiDescription: rockWikiData.description,
  //         wikiImage: rockWikiData.original?.source,
  //         image: "",
  //       };
  //     console.log(newRockData);
  //   };

  //   useEffect(() => {
  //     // Fetch all pages in the 'Rocks' category
  //     const getAllRocks = () => {
  //       fetch(
  //         `https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:Rocks&format=json&origin=*&cmlimit=max`
  //       )
  //         .then((response) => response.json())
  //         .then((data) => {
  //           // Fetch data for each rock page
  //           let rockPromises = data.query.categorymembers.map((page) =>
  //             fetch(
  //               `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&format=json&explaintext=true&titles=${page.title}`
  //             ).then((response) => response.json())
  //           );

  //           return Promise.all(rockPromises);
  //         })
  //         .then((rockData) => {
  //           //setData(rockData);
  //           console.log(rockData);
  //         })
  //         .catch((error) => console.error(error));
  //     };
  //     getAllRocks();
  //   }, []);

  return (
    <div className="rock-list">
      <div>
        <input
          type="text"
          placeholder="Search for a rock..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ width: "100%", padding: "10px", marginBottom: "20px" }}
        />
        <button
          className="search-wikipedia-btn"
          onClick={() => getRockWikipediaData(searchTerm)}
        >
          Search Wikipedia
        </button>
      </div>
      {/* <p>{filteredRocks.length} Rocks</p> */}
      {filteredRocks.map((rock) => (
        <Rock key={rock.name} rock={rock} />
      ))}
    </div>
  );
};

export default RockList;
