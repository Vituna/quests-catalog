import React, { useEffect, useRef } from 'react';
import iconMarker from '../../assets/img/icon-blip.svg';
import leaflet, { Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

import useMap from '../../hooks/useMap';

const Pin = {
  Width: 56,
  Height: 70,
};

const customIcon = leaflet.icon({
  iconUrl: iconMarker,
  iconSize: [Pin.Width, Pin.Height],
  iconAnchor: [Pin.Width / 2, Pin.Height]
});

const MarkerPosition = {
  Lat: 59.968321,
  Lng: 30.317657,
};

function Map() {
  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: MarkerPosition.Lat,
        lng: MarkerPosition.Lng,
      });

      marker
      .setIcon(customIcon)
      .addTo(map)
    }
  }, [map])


  return (
    <div
    style={{height: '100%', width: '100%'}}
    ref={mapRef}
    >
    </div>
  )
};

export default Map;
