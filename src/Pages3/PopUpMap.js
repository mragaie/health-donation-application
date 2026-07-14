// PopUpMap.js
import React from 'react';
import OpenLayerMapSelect from '../components3/OpenLayerMapSelect';
import { Link } from 'react-router-dom';

const PopUpMap = ({ coordinates, setCoordinates, onClose }) => {
  return (
    <div className="popUpMap">
      <div className="popUpMapContent">
        <h2>Pop-Up Map</h2>
        <OpenLayerMapSelect coordinates={coordinates} setCoordinates={setCoordinates} />
        <Link to="/updateinfo">
                <button>SAVE</button>
        </Link>
      </div>
    </div>
  );
};

export default PopUpMap;
