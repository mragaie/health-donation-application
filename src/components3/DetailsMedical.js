import React from 'react'

function DetailsMedical({category, devicetype, use, quantity}) {
  return (
    <div className="detailsmedical">
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Device Type:</strong>  {devicetype}</p>
      <p><strong>Use:</strong>  {use}</p>
      <p><strong>Quantity:</strong>  {quantity}</p>
    </div>
  )
}

export default DetailsMedical
