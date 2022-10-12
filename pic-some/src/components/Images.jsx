import React, {useState, useContext} from 'react'
import { Context } from '../Context'

export default function Images({className, img}) {
    const [hovered, setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)
    const icon = <i className="ri-heart-fill favorite"></i>

    //conditional rendering of icons upon hovering and clicking the images
    function heartIcon() {
        if (img.Favorite){
            return <i className="ri-heart-fill favorite" onClick={()=> toggleFavorite(img.id)}></i>
        } else if(hovered){
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

  return (
    <div className={`${className} image-container`}
    onMouseEnter={()=> setHovered(true)}
    onmouseleave={()=>setHovered(false)}
    >
        <img src={img.url} className="image-grid"/>
        {heartIcon()}
        {cartIcon}
    </div>
  )
}

//the image is being loaded from the url we get from the API
//image container is the grid - styled container for our images 