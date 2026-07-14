import React from 'react'

function DetailsFood({category, type, quantity}) {
  return (
    <div className="detailsfood">
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Item Name:</strong>  {type}</p>
      <p><strong>Quantity:</strong>  {quantity}</p>
    </div>
  )
}

export default DetailsFood
