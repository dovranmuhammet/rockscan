import React, { useState } from 'react'

const Rock = ({ rock, data, extractActive }) => {
  // Button with a beautiful animation:
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  // Search Rock From Wikipedia

  const [rockWikiData, setRockWikiData] = useState()
  const wikipediaUrl = `https://en.wikipedia.org/wiki/${rock.name.replace(
    / /g,
    '_'
  )}`

  return (
    <div className='rock-container'>
      <div className='rock-image-container'>
        <img src={rock?.wikiImage} alt={rock.name} />
      </div>
      <div className='rock-body'>
        <h2>{rock.name}</h2>
        <p>{rock.description}</p>
        {/* <button className="wikipedia-btn">Read more from Wikipedia</button> */}

        <div className='rock-wikipedia-info'>
          <p>
            {extractActive && rock.wikiExtract + '\n'}
            <a
              className='vk-btn'
              href={wikipediaUrl}
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                color: '#fff',
                backgroundColor: isHovered
                  ? 'rgb(153, 122, 92)'
                  : 'rgb(173, 142, 112)',
              }}
            >
              More info
            </a>
          </p>
        </div>
      </div>
      {/* Add more rock details here */}
    </div>
  )
}

export default Rock
