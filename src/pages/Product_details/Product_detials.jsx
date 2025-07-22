import React, { useState } from 'react';
import './Product_detail.css';
import { FaRegHeart, FaStar, FaSync, FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { FiTruck, FiEye } from 'react-icons/fi';

const Product_details = () => {
  const [selectedColor, setSelectedColor] = useState('blue'); // State for selected color
  const [selectedSize, setSelectedSize] = useState('M'); // State for selected size

  const handleChange = (event) => {
    setSelectedColor(event.target.id); // Update selected color on change
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Update selected size on click
  };

  return (
    <div className="product-details-container">
      <div className="product-link">
        <a style={{color:"black",opacity:"0.3"}}>
          Account <span>/</span>
        </a>
        <a style={{color:"black",opacity:"0.3"}}>
          Gaming <span>/</span>
        </a>
        <a>
          Havic HV G-92 Gamepad <span>/</span>
        </a>
      </div>
      <div className="product-main">
        <div className="product-mini-images">
          <div className="mini-images">
            <img src="./../assets/images/image_1.png" alt="Product Image 1" />
          </div>
          <div className="mini-images">
            <img src="./../assets/images/image_2.png" alt="Product Image 2" />
          </div>
          <div className="mini-images">
            <img src="./../assets/images/image_3.png" alt="Product Image 3" />
          </div>
          <div className="mini-images">
            <img src="./../assets/images/image_4.png" alt="Product Image 4" />
          </div>
        </div>
        <div className="product-main-image">
          <img src="./../assets/images/image-main.png" alt="Main Product Image" />
        </div>
        <div className="product-detail-text">
          <h1 className="product-name">Havic HV G-92 Gamepad</h1>
          <div className="stars">
            <FaStar style={{ color: "#FFAD33", fontSize: "24px" }} />
            <FaStar style={{ color: "#FFAD33", fontSize: "24px" }} />
            <FaStar style={{ color: "#FFAD33", fontSize: "24px" }} />
            <FaStar style={{ color: "#FFAD33", fontSize: "24px" }} />
            <FaStar style={{ color: "#dcdbd9ff", fontSize: "24px" }} />
            <div className="star-text">
              <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>
                (150 Reviews)
              </p>
              <p>In stock</p>
            </div>
          </div>
          <p className="cost">$192.00</p>
          <p className="play-station-text">
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </p>
          <div className="line"></div>
          <div className="product-Colours">
            <p style={{ textAlign: "justify" }}>Colours:</p>
            <div className="radio-container">
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="blue"
                  name="color"
                  className="custom-radio"
                  checked={selectedColor === 'blue'}
                  onChange={handleChange}
                />
                
              </div>
              <div className="radio-wrapper">
                <input
                  type="radio"
                  id="red"
                  name="color"
                  className="custom-radio red"
                  checked={selectedColor === 'red'}
                  onChange={handleChange}
                />
                
              </div>
            </div>
          </div>
          <div className="size-btns">
            <div className="size-text">Size:</div>
            <div
              className={`size-buttons ${selectedSize === 'XS' ? 'active' : ''}`}
              onClick={() => handleSizeClick('XS')}
            >
              XS
            </div>
            <div
              className={`size-buttons ${selectedSize === 'S' ? 'active' : ''}`}
              onClick={() => handleSizeClick('S')}
            >
              S
            </div>
            <div
              className={`size-buttons ${selectedSize === 'M' ? 'active' : ''}`}
              onClick={() => handleSizeClick('M')}
            >
              M
            </div>
            <div
              className={`size-buttons ${selectedSize === 'L' ? 'active' : ''}`}
              onClick={() => handleSizeClick('L')}
            >
              L
            </div>
            <div
              className={`size-buttons ${selectedSize === 'XL' ? 'active' : ''}`}
              onClick={() => handleSizeClick('XL')}
            >
              XL
            </div>
          </div>
          <div className="main-buttons">
            <div className="count">
              <div className="operator minus">-</div>
              <div className="operator number">2</div>
              <div className="operator plus">+</div>
            </div>
            <div className="buynow">
              <span style={{ textAlign: "center" }}>Buy now</span>
            </div>
            <div className="favourite">
              <FaRegHeart className="favourite-icon" />
            </div>
          </div>
          <div className="delivery">
            <div className="delivery-first">
              <div className="delivery-icon">
                <FiTruck size={32} />
              </div>
              <div className="delivery-text">
                <p className="delivery-type">Free Delivery</p>
                <p className="delivery-message">
                  Enter your postal code for Delivery Availability
                </p>
              </div>
            </div>
            <div className="delivery-second">
              <div className="delivery-icon">
                <FaSync size={32} />
              </div>
              <div className="delivery-text">
                <p className="delivery-type">Return Delivery</p>
                <p className="delivery-message">
                  Free 30 Days Delivery Returns.<a href="#">Details</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="third-section">
        <div className="flash-sales-container">
          <div className="headline-icon">
            <div className="today-icon"></div>
            <div className="flash-sale-title" style={{color:"#DB4444",fontSize:"20px"}}>Related Item</div>
          </div>
          <div className="flash-sale-heading">
            
          </div>
        </div>
        <div className="sale-product-section">
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className="dis-btn">-40%</div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className="sale-product-image">
                <img src="./../assets/images/GamePad.png" className="product-image" />
              </div>
            </div>
            <div className="sale-product-lower">
              <p className="product-name">HAVIT HV-G92 Gamepad</p>
              <div className="price">
                <p className="current">$120</p>
                <p className="previous">$160</p>
              </div>
              <div className="stars">
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p
                  style={{
                    color: "gray",
                    width: "24px",
                    height: "24px",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  (88)
                </p>
              </div>
            </div>
          </div>
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className="dis-btn">-35%</div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className="sale-product-image">
                <img src="./../assets/images/keyboard.png" className="product-image" />
              </div>
            </div>
            <div className="sale-product-lower">
              <p className="product-name">AK-900 Wired Keyboard</p>
              <div className="price">
                <p className="current">$960</p>
                <p className="previous">$1160</p>
              </div>
              <div className="stars">
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "gray", fontSize: "24px" }} />
                <p
                  style={{
                    color: "gray",
                    width: "24px",
                    height: "24px",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  (75)
                </p>
              </div>
            </div>
          </div>
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className="dis-btn">-30%</div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className="sale-product-image">
                <img src="./../assets/images/TV.png" className="product-image" />
              </div>
            </div>
            <div className="sale-product-lower">
              <p className="product-name">IPS LCD Gaming Monitor</p>
              <div className="price">
                <p className="current">$370</p>
                <p className="previous">$400</p>
              </div>
              <div className="stars">
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p
                  style={{
                    color: "gray",
                    width: "24px",
                    height: "24px",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  (99)
                </p>
              </div>
            </div>
          </div>
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className="dis-btn">-25%</div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" style={{ color: "black" }} />
                  </div>
                </div>
              </div>
              <div className="sale-product-image">
                <img src="./../assets/images/chair.png" className="product-image" />
              </div>
            </div>
            <div className="sale-product-lower">
              <p className="product-name">HAVIT HV-G92 Gamepad</p>
              <div className="price">
                <p className="current">$375</p>
                <p className="previous">$400</p>
              </div>
              <div className="stars">
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p
                  style={{
                    color: "gray",
                    width: "24px",
                    height: "24px",
                    fontWeight: "600",
                    fontSize: "14px",
                  }}
                >
                  (88)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product_details;