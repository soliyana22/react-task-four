import React from 'react';
import { useLocation } from 'react-router-dom';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { state } = useLocation();
  const cartItems = state?.cartItems || [];
    const navigate=useNavigate()
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
        </div>
        {cartItems.map((item, index) => (
          <div className='row second-row' key={index}>
            <div className='product-details'>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
              <p>{item.name}</p>
            </div>
            <div>${item.currentPrice}</div>
            <div>1</div>
            <div>${item.currentPrice}</div>
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
              <p>${cartItems.reduce((total, item) => total + item.currentPrice, 0)}</p>
            </div>
            <div className='line'></div>
            <div className='cart-total-each'>
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className='line'></div>
            <div className='cart-total-each'>
              <p>Total:</p>
              <p>${cartItems.reduce((total, item) => total + item.currentPrice, 0)}</p>
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