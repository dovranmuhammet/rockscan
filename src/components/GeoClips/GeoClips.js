import React from 'react'
import { useState } from 'react'
import geoInfo from './geoinfo.json'

function GeoClips() {
  const [data, useData] = useState([geoInfo])
  console.log(data.map((item) => item.topic))
  return (
    <div>
      <div>{data.map((item) => item[0].topic)}</div>
      <div>{data.map((item) => item[0].description)}</div>
    </div>
  )
}
export default GeoClips
