import React from 'react'

const GeoClips = () => {
  const geologyFacts = [
    "The Earth's crust is made up of several tectonic plates that are constantly moving.",
    "Diamonds are formed under high pressure and temperature deep within the Earth's mantle.",
    'The Grand Canyon in Arizona, USA, is a remarkable example of the erosive power of water over millions of years.',
    'Mount Everest, the highest peak in the world, is part of the Himalayan mountain range formed by tectonic plate collision.',
    'The Great Barrier Reef in Australia is the largest coral reef system in the world.',
    // Add more geology facts to the array
  ]

  // Retrieve a random fact from the geologyFacts array
  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * geologyFacts.length)
    return geologyFacts[randomIndex]
  }

  const randomFact = getRandomFact()

  return (
    <div>
      <h1>Random Geology Fact</h1>
      <p>{randomFact}</p>
    </div>
  )
}

export default GeoClips
