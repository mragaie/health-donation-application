// OpenLayersMap.js
import React, { useEffect } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';

function OpenLayersMap({ coordinates }) {
  useEffect(() => {
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat(coordinates),
        zoom: 10
      })
    });

    // Add marker
    const marker = new Feature({
      geometry: new Point(fromLonLat(coordinates))
    });

    const markerStyle = new Style({
      image: new Icon({
        anchor: [0.5, 46],
        anchorXUnits: 'fraction',
        anchorYUnits: 'pixels',
        src: 'https://openlayers.org/en/latest/examples/data/icon.png' // URL to the marker icon
      })
    });

    marker.setStyle(markerStyle);

    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [marker]
      })
    });

    map.addLayer(vectorLayer);

    return () => map.dispose();
  }, [coordinates]);

  return <div id="map" style={{ width: '100%', height: '100%' }}></div>; // Adjust inline style
}

export default OpenLayersMap;
