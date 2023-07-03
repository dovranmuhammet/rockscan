import React, { useState } from 'react'

const Rock = ({ rock, data, extractActive }) => {
  // Search Rock From Wikipedia

  const [rockWikiData, setRockWikiData] = useState()
  const wikipediaUrl = `https://en.wikipedia.org/wiki/${rock.name.replace(
    / /g,
    '_'
  )}`

  return (
    <article className='article-card'>
      <figure className='article-image'>
        <img src={rock?.wikiImage} alt={rock.name} />
      </figure>
      <div className='article-content'>
        <h3 className='card-title'>{rock.name}</h3>
        <p className='rock-description'>{rock.description}</p>
      </div>
    </article>
  )
}

export default Rock
