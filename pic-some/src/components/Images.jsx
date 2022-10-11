import React from 'react'

export default function Images({className, img}) {
  return (
    <div className={`${className} image-container`}>
        <img src={img.url} className="image-grid"/>
    </div>
  )
}
