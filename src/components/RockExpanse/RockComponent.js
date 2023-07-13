import React from 'react'
import './RockExpanse.css'

const RockComponent = ({ rock }) => {
  return (
    <div className='rock-card'>
      <h2>{rock.name}</h2>
      <p>{rock.description}</p>
      <img src={rock.image} alt={rock.name} />
      <p>Type: {rock.type}</p>
      <p>Formation: {rock.formation}</p>
      <h3>Features:</h3>
      <ul>
        {rock.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  )
}

export default RockComponent
