import React, { useEffect, useRef } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const CreateGlobal = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  // New York City coordinates
  const lng = -74.0060;
  const lat = 40.7128;
  const zoom = 10;

  useEffect(() => {
    if (map.current) return; // stops map from initializing more than once

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json',
      center: [lng, lat],
      zoom: zoom,
      interactive: false,
    });

    map.current.getCanvas().style.cursor = 'default';

    // Add a marker for New York
    new maplibregl.Marker({ color: "#FF0000" })
      .setLngLat([lng, lat])
      .addTo(map.current);

  }, []);

  return (
    <section className="dark-map-section" style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '2rem 0' }}>
      <div 
        ref={mapContainer} 
        style={{ 
          width: '90%', 
          maxWidth: '1200px', 
          height: '500px', 
          borderRadius: '16px', 
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
        }} 
      />
    </section>
  );
};

export default CreateGlobal;