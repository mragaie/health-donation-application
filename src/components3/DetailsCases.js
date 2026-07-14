import React from 'react'

function DetailsCases({patientname, age, gender, weight, address,organizationname,medicalspecialty, casedescription}) {
  return (
    <div className="detailscases">
      <p><strong>Patient Name:</strong>  {patientname}</p>
      <p><strong>Age:</strong>  {age}</p>
      <p><strong>Gender:</strong>  {gender}</p>
      <p><strong>Weight:</strong>  {weight}</p>
      <p><strong>Address:</strong>  {address}</p>
      <p><strong>Organization Name:</strong>  {organizationname}</p>
      <p><strong>Medical Specialty:</strong>  {medicalspecialty}</p>
      <p><strong>Case Description:</strong>  {casedescription}</p>
    </div>
  )
}

export default DetailsCases
