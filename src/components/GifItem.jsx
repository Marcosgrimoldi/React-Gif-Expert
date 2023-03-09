import React from 'react'

export const GifItem = ({title, url, id}) => {
    
  return (
    <div className='card'>
        <img className='card-img' src={url} alt={title}/>
    </div>
  )
}