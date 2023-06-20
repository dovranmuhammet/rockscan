import React from 'react'
import { useState } from 'react'
import geoInfo from './geoinfo.json'
import Geocss from './GeoClips.css'

function GeoClips() {
  const [data, useData] = useState([geoInfo])

  console.log(data.map((item) => item.topic))
  return (
    <div className='geoInfo-card'>
      <div className='topic'>{data.map((item) => item[0].topic)}</div>
      <div className='description'>
        {data.map((item) => item[0].description)}
      </div>
    </div>
  )
}
export default GeoClips
