import React, { useEffect, useRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat, toLonLat } from 'ol/proj';
import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';

function OpenLayersMap() {
    const mapRef = useRef(null); // Reference to the map container

    useEffect(() => {
        const map = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: fromLonLat([0, 0]), // Center the map initially at 0,0
                zoom: 2 // Lower zoom level to see the cursor movement over a larger area
            })
        });

        // Create a marker but don't add it to the map yet
        const marker = new Feature({
            geometry: new Point([0, 0])
        });

        const markerStyle = new Style({
            image: new Icon({
                anchor: [0.5, 1],
                anchorXUnits: 'fraction',
                anchorYUnits: 'fraction',
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

        // Function to update marker position to the mouse location
        const moveMarker = (event) => {
            const coords = map.getCoordinateFromPixel(event.pixel);
            marker.getGeometry().setCoordinates(coords);
        };

        // Click handler to fix the marker at the current position
        const pinMarker = () => {
            map.un('pointermove', moveMarker); // Stop moving the marker with cursor
        };

        // Register event listeners
        map.on('pointermove', moveMarker);
        map.on('singleclick', pinMarker);

        mapRef.current = map; // Store the map instance

        return () => {
            if (mapRef.current) {
                mapRef.current.setTarget(undefined);
            }
        };
    }, []);

    return <div id="map" style={{ width: '100%', height: '500px' }}></div>; // Set height to ensure map visibility
}

export default OpenLayersMap;
