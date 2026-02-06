import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from './CartSlice'
import './CartItem.css'

const CartItem = () => {
  const cart = useSelector(state => state.cart.items)
  const dispatch = useDispatch()

  const handleIncrement = item => {
    dispatch(
      updateQuantity({
        name: item.name,
        quantity: item.quantity + 1,
      }),
    )
  }

  const handleDecrement = item => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          name: item.name,
          quantity: item.quantity - 1,
        }),
      )
    } else {
      dispatch(removeItem(item.name))
    }
  }

  const handleRemove = item => {
    dispatch(removeItem(item.name))
  }

  // Calculate total cost based on quantity for an item
  const calculateTotalCost = item => {
    const price = parseFloat(item.cost.substring(1))
    return (price * item.quantity).toFixed(2)
  }

  return (
    <div className='cart-items-container'>
      {cart.length === 0 ? (
        <div className='cart-empty'>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className='cart-items-list'>
          {cart.map(item => (
            <div className='cart-item' key={item.name}>
              <img className='cart-item-image' src={item.image} alt={item.name} />
              <div className='cart-item-details'>
                <div className='cart-item-name'>{item.name}</div>
                <div className='cart-item-cost'>{item.cost}</div>
                <div className='cart-item-quantity'>
                  <button
                    className='cart-item-button'
                    onClick={() => handleDecrement(item)}>
                    -
                  </button>
                  <span className='cart-item-quantity-value'>
                    {item.quantity}
                  </span>
                  <button
                    className='cart-item-button'
                    onClick={() => handleIncrement(item)}>
                    +
                  </button>
                </div>
                <div className='cart-item-total'>
                  ${calculateTotalCost(item)}
                </div>
                <button
                  className='cart-item-delete'
                  onClick={() => handleRemove(item)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CartItem
