import React, { useState } from 'react';
import './Home.css'
import { FaApple,FaArrowLeft,FaArrowRight, FaEye,FaHeart,FaStar,FaCamera,FaHeadphones,FaGamepad} from "react-icons/fa";
import { ChevronRight,Smartphone,Monitor,Watch,  } from 'lucide-react';

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div className='home-container'>
      <div className='nav-container'>
        <div className='nav-lists'>
            <div className='nav-each'>
              <div className='nav-text'>
                <p>Woman’s Fashion</p>
              </div>
              <div className='nav-icon'>
                <ChevronRight/>
              </div>
            </div>
            <div className='nav-each'>
              <div className='nav-text'>
                <p>Men’s Fashion</p>
              </div>
              <div className='nav-icon'>
                <ChevronRight/>
              </div>
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
          <div className='icon-iphone'>
            <FaApple size={40} style={{color:"white"}}/>
            <p className='iphone-text'>iPhone 14 Series</p>
          </div>
          <div className='discount-container'>
            <p className='discount-text'>Up to 10% off Voucher</p>
          </div>
          <div className='shop-now'>
            <p className='shop-text'>Shop now</p>
            <FaArrowRight size={24} style={{color:"white"}}/>
          </div>
        <div className='image-iphone'>
        <img src="./../assets/images/home_mobile.jpg" className='home_mobile'/>
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
        </div>
      </div>
      <section className='sale-product main'>
      <div className='flash-sales-container'>
        
          <div className='headline-icon'>
            <div className='today-icon'>
            </div>
            <div className='today-text'>Today's</div>
          </div>
          
           <div className='flash-sale-heading'>
            <div className='flash-sale-title'>
              <p className='flash-sale-title'>Flash Sales</p>
              <></>
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
                <FaArrowRight/>
              </div>
              <div className='flash-sale-bg'>
                <FaArrowLeft/>
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
                    <FaHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FaEye className="icon-outline" />
                  </div>
                </div>
        
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/GamePad.png" className='product-image'/>
              </div>
            
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
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{color:"gray",width:"24px",height:"24px",fontWeight:"600",fontSize:"14px"}}>(88)</p>
              </div>
            </div>
            </div>
            
            
            
            <div className='sale-product'>
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn'>-40%</div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FaEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/keyboard.png" className='product-image'/>
              </div>
              <div className='add-to-cart'>
                Add to cart
              </div>
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
                <FaStar style={{ color: "gray", fontSize: "24px" }} />
                <p style={{color:"gray",width:"24px",height:"24px",fontWeight:"600",fontSize:"14px"}}>(75)</p>
              </div>
            </div>
            </div>
<div className='sale-product'>
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn'>-40%</div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FaEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/TV.png" className='product-image'/>
              </div>
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
                
                <p style={{color:"gray",width:"24px",height:"24px",fontWeight:"600",fontSize:"14px"}}>(99)</p>
              </div>
            </div>
            </div>
              <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                <div className='dis-btn'>-40%</div>
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FaEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/chair.png" className='product-image'/>
              </div>
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
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{color:"gray",width:"24px",height:"24px",fontWeight:"600",fontSize:"14px"}}>(88)</p>
              </div>
            </div>
              </div>
           <div className='view-all-products'>
            <p>View All Products</p>
           </div>
         </div>
         
          
            </section>
             <section className='browse-container main'>
        <div className='browse-by-category'>
        
          <div className='headline-icon'>
            <div className='today-icon'>
            </div>
            <div className='today-text'>Categories</div>
          </div>
          
           <div className='flash-sale-heading'>
            <div className='flash-sale-title'>
              <p className='flash-sale-title'>Browse By Category</p>
              <></>
            </div>
            <div className='flash-sale-icon'>
              <div className='flash-sale-bg'>
                <FaArrowRight/>
              </div>
              <div className='flash-sale-bg'>
                <FaArrowLeft/>
              </div>
              </div>
              </div>
            </div>
            <div className='category-wrapper'>
            <div className='category-container'>
            <div className='category'>
              <div className='category-icon'>
                <Smartphone className='each-icon'/>
              </div>
              <div className='category-text'>Phone</div>
            </div>
            </div>
            <div className='category-container'>
            <div className='category'>
              <div className='category-icon'>
                <Monitor className='each-icon'/>
              </div>
              <div className='category-text'>Phone</div>
            </div>
            </div>
            <div className='category-container'>
            <div className='category'>
              <div className='category-icon'>
                <Watch className='each-icon'/>
              </div>
              <div className='category-text'>Phone</div>
            </div>
            </div>
            <div className='category-container'>
              
            <div className='category'>
              <div className='category-icon'>
                <FaCamera className='each-icon'/>
              </div>
              <div className='category-text'>Phone</div>
            </div>
            </div>
            <div className='category-container'>
            <div className='category'>
              <div className='category-icon'>
                <FaHeadphones className='each-icon'/>
              </div>
              <div className='category-text'>Phone</div>
            </div>
            </div><div className='category-container'>
            <div className='category'>
              <div className='category-icon'>
                <FaGamepad className='each-icon'/>
              </div>
              <div className='category-text'>Phone</div>
            </div>
            </div>
      <section className='best-selling-main'>
        <div className='best-selling'>
        
          <div className='headline-icon'>
            <div className='today-icon'>
            </div>
            <div className='today-text'>This Month</div>
          </div>
          
           <div className='flash-sale-heading'>
            <div className='flash-sale-title'>
              <p className='flash-sale-title'>Best Selling Product</p>
              <></>
            </div>
            <div className='flash-sale-icon'>
              <div className='flash-sale-view'>
                View All
              </div>
              </div>
              </div>
              </div>
              </section>
            {/* <div className='category-container'>
            <div className='category'>
              <div className='category-icon'>
                <Smartphone/>
              </div>
              <div className='category-text'>Phone</div>
            </div>
            </div> */}
            </div>
        <section className='best-selling-section'>
        <div className="sale-product-section">
          <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
                
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FaEye className="icon-outline" />
                  </div>
                </div>
        
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/Jacket.png" className='product-image'/>
              </div>
            
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>The north coat</p>
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
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{color:"gray",width:"24px",height:"24px",fontWeight:"600",fontSize:"14px"}}>(65)</p>
              </div>
            </div>
            </div>
            
            
            
            <div className='sale-product'>
            <div className="sale-product-main">
              <div className="sale-product-btn">
              
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FaEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/Bag.png" className='product-image'/>
              </div>
              
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>Gucci duffle bag</p>
              <div className='price'>
                <p className='current'>$960</p>
                <p className='previous'>$1160</p>
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "gray", fontSize: "24px" }} />
                <p style={{color:"gray",width:"24px",height:"24px",fontWeight:"600",fontSize:"14px"}}>(65)</p>
              </div>
            </div>
            </div>
<div className='sale-product'>
            <div className="sale-product-main">
              <div className="sale-product-btn">
                
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FaEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/Speaker.png" className='product-image'/>
              </div>
            </div>
            <div className='sale-product-lower'>
              <p className='product-name'>RGB liquid CPU Cooler</p>
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
                
                <p style={{color:"gray",width:"24px",height:"24px",fontWeight:"600",fontSize:"14px"}}>(99)</p>
              </div>
            </div>
            </div>
              <div className="sale-product">
            <div className="sale-product-main">
              <div className="sale-product-btn">
               
                <div className="sale-product-icon">
                  <div className="icon-circle">
                    <FaHeart className="icon-outline" />
                  </div>
                  <div className="icon-circle">
                    <FaEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className='sale-product-image'>
                <img src="./../assets/images/Shelf.png" className='product-image'/>
              </div>
              </div>
              <div className='sale-product-lower'>
              <p className='product-name'>Small BookSelf</p>
              <div className='price'>
                <p className='current'>$360</p>
                
              </div>
              <div className='stars'>
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <FaStar style={{ color: "#FFD700", fontSize: "24px" }} />
                <p style={{color:"gray",width:"24px",height:"24px",fontWeight:"600",fontSize:"14px"}}>(65)</p>
              </div>
            </div>
              </div>
          
         </div>
         </section>  
            </section>
            <div className='enhance-container'>
              <div className='enhace-text'>
                <p className='enhance-category'>Categories</p>
                <p className='enhance-main-text'>Enhance Your Music Experience</p>
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
              </div>
              <div className='enhace-image'>
                <img src="./../assets/images/enhance-speaker.png"></img>
              </div>
            </div>
            </div>
         

          
       

     
   
  )
}

export default Home
