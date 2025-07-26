import React from 'react'
import './Cart.css'
export const Cart = () => {
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
            <div className='row second-row'>
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
            </div>
            <div className='row third-row'>
                 <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
            </div>
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
                    <p>$1750</p>
                
                </div>
                <div className='line'></div>
                 <div className='cart-total-each'>
                    <p>Shipping:</p>
                    <p>Free</p>
                
                </div>
                <div className='line'></div>
                <div className='cart-total-each'>
                    <p>Total:</p>
                    <p>$1750</p>
                
                </div>
                
                <div className='checkout'>
                    <button className='checkout-btn'>Proceed to checkout</button>
                </div>
            </div>
            </div>
        </div>
        </div>

  
  )
}
