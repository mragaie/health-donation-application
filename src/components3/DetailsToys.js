import React from 'react'

function DetailsToys({name, image, category, type, age, gender, gamecategory, quantity}) {
  return (
    <div className="detailstoys">
      <div style={{backgroundImage : `url(${image})`}}> </div>
      <h1>{name}</h1>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Type:</strong>  {type}</p>
      <p><strong>Age:</strong>  {age}</p>
      <p><strong>Gender:</strong>  {gender}</p>
      <p><strong>Game Category:</strong>  {gamecategory}</p>
      <p><strong>Quantity:</strong>  {quantity}</p>
    </div>
  )
}

export default DetailsToys
