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
    <div className='side-container'>
      <div className='article-container'>
        <article className='article-card'>
          <figure className='article-image'>
            <img src={rock?.wikiImage} alt={rock.name} />
          </figure>
          <div className='article-content'>
            <h3 className='card-title'>{rock.name}</h3>
            <p className='rock-description'>{rock.description}</p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default Rock
