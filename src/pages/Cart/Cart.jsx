import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';
import {X} from 'lucide-react'

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items); // Correct path
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className='cart-container'>
      <div className='cart-link'>
        <div className='Inactive'>Home<span>/</span></div>
        <div className='active'>Cart<span>/</span></div>
      </div>
      <div className='rows'>
        <div className='row first-row'>
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
          <p>Action</p>
        </div>
        {cartItems.map((item, index) => (
          <div className='row second-row' key={item.id}> {/* Use item.id for unique key */}
            <div className='product-details'>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} /><X onClick={() => dispatch(removeFromCart(item.id))} size={10} style={{color:"#DB4444;"}}/> {/* Use item.id */}
              <p>{item.name}</p>
            </div>
            <div>${item.currentPrice}</div>
            <div>{item.quantity}</div> {/* Dynamic quantity */}
            <div>${item.currentPrice * item.quantity}</div> {/* Subtotal with quantity */}
            <div>
              
            </div>
          </div>
        ))}
      </div>
      <div className='rows'>
        <div className='cart-main-buttons'>
          <div className='cart-coupon'>
            <div><button className='coupon-code'>Coupon Code</button></div>
            <div><button className='apply'>Apply Coupon</button></div>
          </div>
          <div className='cart-total-main'>
            <div className='cart-total-each'>
              <h5>Cart Total</h5>
            </div>
            <div className='cart-total-each'>
              <div>Subtotal:</div>
              <p>${cartItems.reduce((total, item) => total + item.currentPrice * item.quantity, 0)}</p>
            </div>
            <div className='line'></div>
            <div className='cart-total-each'>
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className='line'></div>
            <div className='cart-total-each'>
              <p>Total:</p>
              <p>${cartItems.reduce((total, item) => total + item.currentPrice * item.quantity, 0)}</p>
            </div>
            <div className='checkout'>
              <button className='checkout-btn' onClick={() => navigate('/about')}>Proceed to checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;