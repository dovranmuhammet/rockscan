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
              href={wikipediaUrl}
              target='_blank'
              rel='noopener noreferrer'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                display: 'inline-block',
                fontSize: '1.2rem',
                color: '#fff',
                backgroundColor: isHovered ? 'lightpink' : 'lightblue',
                textDecoration: 'none',
                borderRadius: '6px',
                padding: '8px 16px',
                border: 'none',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                transition:
                  'background-color 0.3s, transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                fontWeight: 'bold',
              }}
            >
              Wikipedia
            </a>
          </p>
        </div>
      </div>
      {/* Add more rock details here */}
    </div>
  )
}

export default Rock
