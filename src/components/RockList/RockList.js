import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Button, CardActions } from '@mui/material'
import rockDataJson from './rocks.json'
import axios from 'axios'

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
    <div>
      <div
        className='input'
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <input
          type='search'
          placeholder='Search rocks'
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: '12px 18px',
            borderRadius: '20px',
            border: '1.5px solid #ddd',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
            outline: 'none',
            fontSize: '16px',
            width: '800px',
            margin: '10px',
          }}
        />
      </div>
      <div className='card-container'>
        {/* {Data fetching} */}

        {filteredRocks.map((rock) => (
          <Card key={rock.id} className='card'>
            <CardContent>
              <div className='image-container'>
                <img src={rock.wikiImage} alt='Earth' className='card-image' />
              </div>

              {/* Topic-Title */}

              <Typography
                gutterBottom
                variant='h5'
                component='div'
                className='card-title'
                style={{
                  textAlign: 'center',
                  color: '#22447b',
                  fontWeight: '550',
                  marginTop: '25px',
                }}
              >
                {rock.name}
              </Typography>

              {/* Description of the topic */}

              <Typography
                variant='body2'
                color='text.secondary'
                className='card-description'
              >
                {rock.description}
              </Typography>
            </CardContent>

            {/* Share-Button */}
            <CardActions className='card-actions'>
              {/* Lear-More */}
              <Button
                size='small'
                onClick={() => getRockWikipediaData(rock.name)}
                href='https://education.nationalgeographic.org/resource/resource-library-age-earth/'
                target='_blank'
                style={{
                  backgroundColor: '#345a8b ',
                  color: '#fff',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  fontWeight: 'bold',
                  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                  transition:
                    'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default RockList
