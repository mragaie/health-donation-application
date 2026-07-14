import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon /> <XIcon /> <FacebookIcon /> <PhoneIcon />
      </div>
      <p>&copy; 2024 Aloo_inc</p>

    </div>
  )
}

export default Footer
