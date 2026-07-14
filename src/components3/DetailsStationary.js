import React from 'react'

function DetailsStationary({name, image, category, type, quantity}) {
  return (
    <div className="detailsstationary">
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Type:</strong>  {type}</p>
      <p><strong>Quantity:</strong>  {quantity}</p>
    </div>
  )
}

export default DetailsStationary