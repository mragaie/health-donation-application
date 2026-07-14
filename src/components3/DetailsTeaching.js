import React from 'react'

function DetailsTeaching({name, image, category, numberofstudents, address,subjects}) {
  return (
    <div className="detailsteaching">
      <div style={{backgroundImage : `url(${image})`}}> </div>
      <p><strong>Numbe Of Students:</strong>  {numberofstudents}</p>
      <p><strong>Address:</strong>  {address}</p>
      <p><strong>Subjects:</strong>  {subjects}</p>
    </div>
  )
}

export default DetailsTeaching