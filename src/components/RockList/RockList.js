import React, { useState, useEffect } from 'react'
import rockDataJson from './rocks.json'
import axios from 'axios'
import Rock from '../Rock/Rock'

const RockList = () => {
  const [data, setData] = useState(null)
  const [rockData, setRockData] = useState(rockDataJson)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const filteredRocks = rockData.filter((rock) =>
    rock.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getRockWikipediaData = async (name) => {
    const data = // await axios.get(
      //   `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=extracts&exintro=&explaintext=&format=json&titles=${name}`
      // )
      (
        await axios.get(
          `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&prop=pageimages%7Cdescription%7Cextracts&list=&titles=${name}&redirects=1&formatversion=2&piprop=original&pithumbsize=200&exintro=1&explaintext=1&exsentences=${5}`
        )
      ).data
    let pages = data.query.pages
    let page = pages[Object.keys(pages)[0]]
    // console.log(data.query.pages[0]);
    const wikiRock = data.query.pages[0]
    const newRockObj = {
      name: name,
      description: wikiRock.description,
      wikiExtract: wikiRock.extract,
      wikiImage: wikiRock.original?.source,
    }
    console.log(newRockObj)
    setRockData([newRockObj])
    return wikiRock
  }

  return (
    <div className='wiki-container'>
      <div className='searchbar-container'>
        <input
          type='text'
          placeholder='Search for a rock...'
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
          className='search-bar'
        />
        <button
          className='search-wikipedia-btn'
          onClick={() => getRockWikipediaData(searchTerm)}
        >
          Search rocks
        </button>
      </div>
      {/* <p>{filteredRocks.length} Rocks</p> */}
      {filteredRocks.map((rock) => (
        <Rock key={rock.id} rock={rock} />
      ))}
    </div>
  )
}

export default RockList
