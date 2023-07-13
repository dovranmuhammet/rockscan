import React from 'react'
import RockComponent from './RockComponent'
import rockData from './rockData.json'
import './RockExpanse.css'

const RockExpanse = () => {
  return (
    <div className='container'>
      <h1>Rock Expanse</h1>
      {rockData.map((rock) => (
        <RockComponent key={rock.id} rock={rock} />
      ))}
    </div>
  )
}

export default RockExpanse
