import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Link } from "react-router-dom";

const marks = [
  {
    value: 1,
    label: '1 year',
  },
  {
    value: 3,
    label: '3 years',
  },
  {
    value: 13,
    label: '13 years',
  },
  {
    value: 18,
    label: '18 years',
  },
];

function SlideBar(value) {
  return `${value} years`;
}

export default function DiscreteSliderValues() {
  const [redirect, setRedirect] = useState(false);
  const [redirectTo, setRedirectTo] = useState(null);

  const handleChange = (event, newValue) => {
    if (newValue === 1) {
      setRedirect(true);
      setRedirectTo("clothes1");
    } 
    else if (newValue === 3) {
      setRedirect(true);
      setRedirectTo("clothes3");
    } 
    else if (newValue === 13) {
        setRedirect(true);
        setRedirectTo("clothes13");
    }
    else if (newValue === 18) {
        setRedirect(true);
        setRedirectTo("clothes18");
    }
    else {
      setRedirect(false);
      setRedirectTo(null);
    }
  };

  return (
    <Box sx={{ width: 300 }}>
      {redirect && redirectTo && (
        <Link to={`/${redirectTo}`}>Redirect to {redirectTo}</Link>
      )}
      {!redirect && (
        <Slider
          aria-label="Restricted values"
          defaultValue={1}
          getAriaValueText={SlideBar}
          step={null}
          valueLabelDisplay="auto"
          marks={marks}
          onChange={handleChange}
        />
      )}
    </Box>
  );
}
