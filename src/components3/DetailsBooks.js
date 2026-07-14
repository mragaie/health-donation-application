import React from 'react'

function DetailsBooks({name, image, category, bookname, author, language, edition, shortsummary, quantity}) {
  return (
    <div className="detailsbooks">
      <div style={{backgroundImage : `url(${image})`}}> </div>
      <h1>{name}</h1>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>bookname:</strong>  {bookname}</p>
      <p><strong>Author:</strong>  {author}</p>
      <p><strong>Language:</strong>  {language}</p>
      <p><strong>Edition:</strong>  {edition}</p>
      <p><strong>Short Summary:</strong>  {shortsummary}</p>
      <p><strong>Quantity:</strong>  {quantity}</p>
    </div>
  )
}

export default DetailsBooks
