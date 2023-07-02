import type { NextPage } from 'next';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRef } from 'react';

const Map: NextPage = () => {
    const mapContainer = useRef<any>(null);
  return (
    <main>
        <div className="map-container" ref={mapContainer} />
    </main>
  );
};
export default Map;