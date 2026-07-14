import React from 'react'

function DetailsBlood({name, image, category, patientname, bloodtype, hospitalname, hospitalarea, governorate, hospitaladdress}) {
  return (
    <div className="detailsblood">
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Patient Name:</strong>  {patientname}</p>
      <p><strong>Blood Type:</strong>  {bloodtype}</p>
      <p><strong>Hospital Name:</strong>  {hospitalname}</p>
      <p><strong>Hospital Area:</strong>  {hospitalarea}</p>
      <p><strong>Governorate:</strong>  {governorate}</p>
      <p><strong>Hospital Address:</strong>  {hospitaladdress}</p>
    </div>
  )
}

export default DetailsBlood
