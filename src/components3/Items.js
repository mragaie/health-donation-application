import React from 'react'
import { Link } from 'react-router-dom';

function Items({name, image, category, linkTo}) {

  return (
    <div className="Item">
      <div style={{backgroundImage : `url(${image})`}}> </div>
      <h1>{name}</h1>
      <p><strong>Category:</strong> {category}</p>
      <Link to={linkTo}>View Details</Link>
    </div>
  )
}

export default Items
