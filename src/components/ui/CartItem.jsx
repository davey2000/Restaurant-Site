import './CartItem.css'
import { incrementQuantity, decrementQuantity, removeItem } from '../../redux-store/CartSlice'
import { useDispatch } from 'react-redux'

function CartItem({id, tags, title, price, quantity=0}) {
  const dispatch = useDispatch()

  return (
    <div className="cartItem">
      
      <div className="cartItem__info">
        <p className="cartItem__title">{title}</p>
        <p className="cartItem__price">
          
          <strong className='cart__price'>{price}</strong>
        </p>
        <div className='cartItem__tags'>
        <h3 className='tags'>{tags}</h3>
        </div>
        
        <div className='cartItem__incrDec'>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
          <p className='cart__quantity'>{quantity}</p>
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
        </div>
        <button
          className='cartItem__removeButton' 
          onClick={() => dispatch(removeItem(id))}>
            Remove
        </button>
      </div>
    </div>
  )
}

export default CartItem