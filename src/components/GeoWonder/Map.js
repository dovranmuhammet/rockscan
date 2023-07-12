import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = ({ mapOptions, markerText }) => {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer
        center={mapOptions.center}
        zoom={mapOptions.zoom}
        style={{ height: '100%', width: '100%' }}
      >
        {/* Add TileLayer component to specify the map tiles */}
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        {/* Add Marker component to indicate a location */}
        <Marker position={mapOptions.center}>
          <Popup>{markerText}</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
