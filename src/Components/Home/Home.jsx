import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { FiEye } from "react-icons/fi";
import { FaApple, FaArrowLeft, FaArrowRight, FaStar, FaRegHeart, FaCamera, FaHeadphones, FaGamepad } from "react-icons/fa";
import { ChevronRight, Smartphone, Monitor, Watch, Verified, Truck, ShoppingCart } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/cartSlice'
import { setSelectedColor } from '../../redux/productSlice';
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from './../../util/firebase';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedColor = useSelector((state) => state.product.selectedColor);

  const handleChange = (e) => {
    dispatch(setSelectedColor(e.target.id === 'first' ? 'blue' : 'red'));
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate('/cart');
  };

  return (
    <div className='home-container'>
      <section className='first-section'>
        <div className='nav-container'>
          <div className='nav-lists'>
            <div className='nav-each'>
              <div className='nav-text'>
                <p>Woman’s Fashion</p>
              </div>
              <div className='nav-icon'>
                <ChevronRight />
              </div>
            </div>
            <div className='nav-each'>
              <div className='nav-text'>
                <p>Men’s Fashion</p>
              </div>
              <div className='nav-icon'></div>
            </div>
            <div className='nav-each'>
              <div className='nav-text'>
                <p>Electronics</p>
              </div>
            </div>
            <div className='nav-each'>
              <div className='nav-text'>
                <p>Home & Lifestyle</p>
              </div>
            </div>
            <div className='nav-each'>
              <div className='nav-text'>
                <p>Medicine</p>
              </div>
            </div>
            <div className='nav-each'>
              <div className='nav-text'>
                <p>Sports & Outdoor</p>
              </div>
            </div>
            <div className='nav-each'>
              <div className='nav-text'>
                <p>Baby’s & Toys</p>
              </div>
            </div>
            <div className='nav-each'>
              <div className='nav-text'>
                <p>Groceries & Pets</p>
              </div>
            </div>
            <div className='nav-each'>
              <div className='nav-text'>
                <p>Health & Beauty</p>
              </div>
            </div>
          </div>
        </div>

        <div className='image-container'>
          <div className='image-container-main'>
            <div className='image-container-text'>
              <div className='icon-iphone'>
                <FaApple size={40} style={{ color: "white" }} />
                <p className='iphone-text'>iPhone 14 Series</p>
              </div>
              <div className='discount-container'>
                <p className='discount-text'>Up to 10% off Voucher</p>
              </div>
              <div className='shop-now'>
                <p className='shop-text'>Shop now</p>
                <FaArrowRight size={24} style={{ color: "white" }} />
              </div>
            </div>
            <div className="ellipses">
              {[0, 1, 2, 3, 4].map((_, index) => (
                <div
                  key={index}
                  className={`ellipse-each ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                ></div>
              ))}
            </div>
            <div className='image-main'>
              <div className='image-iphone'>
                <img src="./../assets/images/home_mobile.jpg" className='home_mobile' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='third-section'>
        <div className='flash-sales-container'>
          <div className='headline-icon'>
            <div className='today-icon'></div>
            <div className='today-text'>Today's</div>
          </div>
          <div className='flash-sale-heading'>
            <div className='flash-sale-title'>
              <p className='flash-sale-title'>Flash Sales</p>
            </div>
            <div className='flash-sale-date'>
              <div className='flash-sale-date-title'>
                <p className='calendar'>Days</p>
                <div className='calendar-colon'>
                  <p>03</p>
                  <p className='colon'>:</p>
                </div>
              </div>
              <div className='flash-sale-date-title'>
                <p className='calendar'>Hours</p>
                <div className='calendar-colon'>
                  <p>23</p>
                  <p className='colon'>:</p>
                </div>
              </div>
              <div className='flash-sale-date-title'>
                <p className='calendar'>Minutes</p>
                <div className='calendar-colon'>
                  <p>19</p>
                  <p className='colon'>:</p>
                </div>
              </div>
              <div className='flash-sale-date-title'>
                <p className='calendar'>Seconds</p>
                <div className='calendar-colon'>
                  <p>56</p>
                </div>
              </div>
            </div>
            <div className='flash-sale-icon'>
              <div className='flash-sale-bg'>
                <FaArrowRight />
              </div>
              <div className='flash-sale-bg'>
                <FaArrowLeft />
              </div>
            </div>
          </div>
        </div>
        <div className="sale-product-section">
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn'>-40%</div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/GamePad.png" className='product-image' />
              </div>
              <div className='add-cart' onClick={() => handleAddToCart({ name: 'HAVIT HV-G92 Gamepad', image: './../assets/images/GamePad.png', currentPrice: 120 })}>
                <div className='add-to-cart-text'><ShoppingCart /><p >Add to Cart</p></div></div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>HAVIT HV-G92 Gamepad</p>
              <div className='price'>
                <p className='current'>$120</p>
                <p className='previous'>$160</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", width: "24px", height: "24px", fontWeight: "600", fontSize: "14px" }}>(88)</p>
              </div>
            </div>
          </div>
          <div className='sale-product'>
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn'>-35%</div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/keyboard.png" className='product-image' />
              </div>
              <div className='add-cart' onClick={() => handleAddToCart({ name: 'AK-900 Wired Keyboard', image: './../assets/images/keyboard.png', currentPrice: 960 })}>
                <div className='add-to-cart-text'><ShoppingCart /><p >Add to Cart</p></div></div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>AK-900 Wired Keyboard</p>
              <div className='price'>
                <p className='current'>$960</p>
                <p className='previous'>$1160</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "gray", fontSize: "24px" }} />
                <p style={{ color: "gray", width: "24px", height: "24px", fontWeight: "600", fontSize: "14px" }}>(75)</p>
              </div>
            </div>
          </div>
          <div className='sale-product'>
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn'>-30%</div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/TV.png" className='product-image' />
              </div>
              <div className='add-cart' onClick={() => handleAddToCart({ name: 'IPS LCD Gaming Monitor', image: './../assets/images/TV.png', currentPrice: 370 })}>
                <div className='add-to-cart-text'><ShoppingCart /><p >Add to Cart</p></div></div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>IPS LCD Gaming Monitor</p>
              <div className='price'>
                <p className='current'>$370</p>
                <p className='previous'>$400</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", width: "24px", height: "24px", fontWeight: "600", fontSize: "14px" }}>(99)</p>
              </div>
            </div>
          </div>
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn'>-25%</div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" style={{ color: "black" }} />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/chair.png" className='product-image' />
              </div>
              <div className='add-cart' onClick={() => handleAddToCart({ name: 'S-Series Comfort Chair', image: './../assets/images/chair.png', currentPrice: 375 })}>
                <div className='add-to-cart-text'><ShoppingCart /><p >Add to Cart</p></div></div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>S-Series Comfort Chair</p>
              <div className='price'>
                <p className='current'>$375</p>
                <p className='previous'>$400</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", width: "24px", height: "24px", fontWeight: "600", fontSize: "14px" }}>(88)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='line'></div>

      <section className='fourth-section'>
        <div className='fourth-section-main'>
          <div className='browse-by-category'>
            <div className='headline-icon'>
              <div className='today-icon'></div>
              <div className='today-text'>Categories</div>
            </div>
            <div className='flash-sale-heading'>
              <div className='flash-sale-title'>
                <p className='flash-sale-title'>Browse By Category</p>
              </div>
              <div className='flash-sale-icon'>
                <div className='flash-sale-bg'>
                  <FaArrowRight />
                </div>
                <div className='flash-sale-bg'>
                  <FaArrowLeft />
                </div>
              </div>
            </div>
          </div>
          <div className='category-wrapper'>
            <div className='category-container'>
              <div className='category'>
                <div className='category-icon'>
                  <Smartphone className='each-icon' />
                </div>
                <div className='category-text'>Phone</div>
              </div>
            </div>
            <div className='category-container'>
              <div className='category'>
                <div className='category-icon'>
                  <Monitor className='each-icon' />
                </div>
                <div className='category-text'>Computer</div>
              </div>
            </div>
            <div className='category-container'>
              <div className='category'>
                <div className='category-icon'>
                  <Watch className='each-icon' />
                </div>
                <div className='category-text'>Watch</div>
              </div>
            </div>
            <div className='category-container'>
              <div className='category'>
                <div className='category-icon'>
                  <FaCamera className='each-icon' />
                </div>
                <div className='category-text'>Camera</div>
              </div>
            </div>
            <div className='category-container'>
              <div className='category'>
                <div className='category-icon'>
                  <FaHeadphones className='each-icon' />
                </div>
                <div className='category-text'>Headphones</div>
              </div>
            </div>
            <div className='category-container'>
              <div className='category'>
                <div className='category-icon'>
                  <FaGamepad className='each-icon' />
                </div>
                <div className='category-text' onClick={() => navigate("/productdetail")}>Game pad</div>
              </div>
            </div>
          </div>
          <div className='line'></div>
        </div>
      </section>

      <section className='fifth-section'>
        <div className='flash-sales-container'>
          <div className='headline-icon'>
            <div className='today-icon'></div>
            <div className='today-text'>This Month</div>
          </div>
          <div className='flash-sale-heading'>
            <div className='flash-sale-title'>
              <p className='flash-sale-title'>Best Selling Products</p>
            </div>
            <div className='flash-sale-icon'>
              <div className='flash-sale-bg'>
                <FaArrowRight />
              </div>
              <div className='flash-sale-bg'>
                <FaArrowLeft />
              </div>
            </div>
          </div>
        </div>
        <div className="sale-product-section">
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn-main'></div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/Jacket.png" className='product-image' />
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>The North Coat</p>
              <div className='price'>
                <p className='current'>$260</p>
                <p className='previous'>$360</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>(65)</p>
              </div>
            </div>
          </div>
          <div className='sale-product'>
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn-main'></div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/Bag.png" className='product-image' />
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>Gucci Duffle Bag</p>
              <div className='price'>
                <p className='current'>$960</p>
                <p className='previous'>$1160</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "gray", fontSize: "24px" }} />
                <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>(65)</p>
              </div>
            </div>
          </div>
          <div className='sale-product'>
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn-main'></div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/Speaker.png" className='product-image' />
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>RGB Liquid CPU Cooler</p>
              <div className='price'>
                <p className='current'>$160</p>
                <p className='previous'>$170</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>(99)</p>
              </div>
            </div>
          </div>
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn-main'></div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/Shelf.png" className='product-image' />
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>Small Bookshelf</p>
              <div className='price'>
                <p className='current'>$360</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>(65)</p>
              </div>
            </div>
          </div>
        </div>
        <div className='line'></div>
      </section>

      <section className='sixth-section'>
        <div className='enhance-container'>
          <div className='enhace-text'>
            <p className='enhance-category'>Categories</p>
            <p className='enhance-main-text'>Enhance Your <br /> Music Experience</p>
            <div className='rounded-divs'>
              <div className="rounded-each">
                <p className='rounded-number'>23</p>
                <p className='rounded-time'>Hours</p>
              </div>
              <div className="rounded-each">
                <p className='rounded-number'>05</p>
                <p className='rounded-time'>Days</p>
              </div>
              <div className="rounded-each">
                <p className='rounded-number'>59</p>
                <p className='rounded-time'>Minutes</p>
              </div>
              <div className="rounded-each">
                <p className='rounded-number'>35</p>
                <p className='rounded-time'>Seconds</p>
              </div>
            </div>
            <div className='enhance-button'>
              <div className='enhace-button-main'>Buy now</div>
            </div>
          </div>
          <div className='enhace-image'>
            <img src="./../assets/images/enhance-speaker.png" />
          </div>
        </div>
      </section>

      <section className='fifth-section'>
        <div className='flash-sales-container'>
          <div className='headline-icon'>
            <div className='today-icon'></div>
            <div className='today-text'>This Month</div>
          </div>
          <div className='flash-sale-heading'>
            <div className='flash-sale-title'>
              <p className='flash-sale-title'>Best Selling Products</p>
            </div>
            <div className='flash-sale-icon'>
              <div className='flash-sale-bg'>
                <FaArrowRight />
              </div>
              <div className='flash-sale-bg'>
                <FaArrowLeft />
              </div>
            </div>
          </div>
        </div>
        <div className="sale-product-section">
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn-main'></div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/dog_food.jpg" className='product-image' />
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>Breed Dry Dog Food</p>
              <div className='price'>
                <p className='current'>$100</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>(35)</p>
              </div>
            </div>
          </div>
          <div className='sale-product'>
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn-main'></div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/camera.png" className='product-image' />
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>CANON EOS DSLR Camera</p>
              <div className='price'>
                <p className='current'>$360</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>(65)</p>
              </div>
            </div>
          </div>
          <div className='sale-product'>
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn-main'></div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/laptop.png" className='product-image' />
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>ASUS FHD Gaming Laptop</p>
              <div className='price'>
                <p className='current'>$700</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>(99)</p>
              </div>
            </div>
          </div>
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn-main'></div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/cosmetics.png" className='product-image' />
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>Curology Product Set</p>
              <div className='price'>
                <p className='current'>$500</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>(65)</p>
              </div>
            </div>
          </div>
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn-main'></div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/car.png" className='product-image' />
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>Kids Electric Car</p>
              <div className='price'>
                <p className='current'>$960</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>(65)</p>
              </div>
            </div>
          </div>
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn-main'></div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/sport_shoes.png" className='product-image' />
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>Jr. Zoom Soccer Cleats</p>
              <div className='price'>
                <p className='current'>$1160</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>(35)</p>
              </div>
            </div>
          </div>
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn-main'></div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/black_gamepad.png" className='product-image' />
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>GP11 Shooter USB Gamepad</p>
              <div className='price'>
                <p className='current'>$660</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>(55)</p>
              </div>
            </div>
          </div>
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn-main'></div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/women_jacket.png" className='product-image' />
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>Quilted Satin Jacket</p>
              <div className='price'>
                <p className='current'>$660</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{ color: "gray", fontWeight: "600", fontSize: "14px" }}>(55)</p>
              </div>
              <div className="radio-container">
                <div className="radio-wrapper">
                  <input
                    type="radio"
                    id="first"
                    name="color"
                    className="custom-radio"
                    checked={selectedColor === 'blue'}
                    onChange={handleChange}
                  />
                </div>
                <div className="radio-wrapper">
                  <input
                    type="radio"
                    id="second"
                    name="color"
                    className="custom-radio red"
                    checked={selectedColor === 'red'}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='view-all-products'>
          <p>View All Products</p>
        </div>
        <div className='line'></div>
      </section>

      <section className="seventh-section">
        <div className="showcase-container">
          <div className="grid-container">
            <div className="grid-item ps5">
              <img src="./../assets/images/PS-5.png" alt="PlayStation 5" />
              <div className="content">
                <h2>PlayStation 5</h2>
                <p>Black and White version of the PS5 coming out on sale.</p>
                <a href="#">Shop Now</a>
              </div>
            </div>
            <div className="grid-item women">
              <img src="./../assets/images/women-photo.jpg" alt="Women's Collections" />
              <div className="content">
                <h2>Women’s Collections</h2>
                <p>Featured woman collections that give you another vibe.</p>
                <a href="#">Shop Now</a>
              </div>
            </div>
            <div className="grid-item speakers">
              <img src="./../assets/images/amazon-speaker.png" alt="Speakers" />
              <div className="content">
                <h2>Speakers</h2>
                <p>Amazon wireless speakers</p>
                <a href="#">Shop Now</a>
              </div>
            </div>
            <div className="grid-item perfume">
              <img src="./../assets/images/Gucci-perfume.png" alt="Perfume" />
              <div className="content">
                <h2>Perfume</h2>
                <p>GUCCI INTENSE OUD EDP</p>
                <a href="#">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='last-section'>
        <div className='last-each'>
          <div className='last-main'>
            <div className='last-icon'>
              <Truck className='icon' />
            </div>
            <div className='last-text'>
              <h5 className='last-text-heding'>FREE AND FAST DELIVERY</h5>
              <p className='last-text-text'>Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className='last-main'>
            <div className='last-icon'>
              <FaHeadphones className='icon' />
            </div>
            <div className='last-text'>
              <h5 className='last-text-heding'>FREE AND FAST DELIVERY</h5>
              <p className='last-text-text'>Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className='last-main'>
            <div className='last-icon'>
              <Verified className='icon' />
            </div>
            <div className='last-text'>
              <h5 className='last-text-heding'>FREE AND FAST DELIVERY</h5>
              <p className='last-text-text'>Free delivery for all orders over $140</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;