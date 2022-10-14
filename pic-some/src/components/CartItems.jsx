import React, {useContext} from 'react'
import { Context } from '../Context'

export default function CartItems({item}) {
    const {removeFromCart, CartItems} = useContext(Context)

    const deleteIcon = "ri-delete-bin-line"

    const deleteIconDisplay = CartItems === onMouseOver ? deleteIcon : 'none'

  return (
    <div className="cart-item">
    <i className={deleteIconDisplay} onClick={()=>removeFromCart(item.id)}></i>
    <img src={item.url} width="130px" />
    <p>$5.99</p>
</div>
  )
}