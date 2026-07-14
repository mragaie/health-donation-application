import React from 'react'

function DetailsClothes({name, image, category, age, gender, season, material, quantity}) {
  return (
    <div className="detailsclothes">
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Age:</strong>  {age}</p>
      <p><strong>Gender:</strong>  {gender}</p>
      <p><strong>Season:</strong>  {season}</p>
      <p><strong>Material:</strong>  {material}</p>
      <p><strong>Quantity:</strong>  {quantity}</p>
    </div>
  )
}

export default DetailsClothes
