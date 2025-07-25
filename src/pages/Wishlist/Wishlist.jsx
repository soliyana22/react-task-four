import React from 'react'
import { FaStar,FaCart } from 'react-icons/fa';
import {FiEye} from 'react-icons/fi';
import { FiTrash2 } from "react-icons/fi";
import './Wishlist.css'
const Wishlist = () => {
  return (
    <div className='wishlist-container'>
      <section className="third-section">
              <div className="flash-sales-container">
               
                <div className="headline-icon">
            <div>
            <div className="today-icon"></div>
            <div className="" style={{fontSize:"20px"}}>Wishlist(4)</div>
            </div>
            <button className='see-all'>Move All to Bag</button>
          </div>
                <div className="flash-sale-heading">
                  
                </div>
              </div>
              <div className="sale-product-section">
                <div className="sale-product">
                  <div className="sale-product-main">
                    <div className="sale-product-btn">
                      <div className="dis-btn">-35%</div>
                      <div className="sale-product-icon">
                        <div className="icon-circle">
                          <FiTrash2 size={24}/>
                        </div>
                       
                      </div>
                    </div>
                    <div className="sale-product-image">
                      <img src="./../assets/images/Bag.png" className="product-image" />
                    </div>
                    <div className='add-cart'><FaCart/>Add to Cart</div>
                  </div>
                  <div className="sale-product-lower">
                    <p className="product-name">Gucci duffle bag</p>
                    <div className="price">
                      <p className="current">$960</p>
                      <p className="previous">$1160</p>
                    </div>
                    
                  </div>
                </div>
                <div className="sale-product">
                  <div className="sale-product-main">
                    <div className="sale-product-btn">
                      <div className=""></div>
                      <div className="sale-product-icon">
                        <div className="icon-circle">
                          <FiTrash2 size={24}/>
                        </div>
                        {/* <div className="icon-circle">
                          <FiEye className="icon-outline" />
                        </div> */}
                      </div>
                    </div>
                    <div className="sale-product-image">
                      <img src="./../assets/images/Speaker.png" className="product-image" />
                    </div>
                  </div>
                  <div className="sale-product-lower">
                    <p className="product-name">RGB liquid CPU Cooler</p>
                    <div className="price">
                      <p className="current">$1960</p>
                      
                    </div>
          
                  </div>
                </div>
              <div className="sale-product">
                  <div className="sale-product-main">
                    <div className="sale-product-btn">
                      <div className=""></div>
                      <div className="sale-product-icon">
                        <div className="icon-circle">
                          <FiTrash2 size={24}/>
                        </div>
                        {/* <div className="icon-circle">
                          <FiEye className="icon-outline" style={{ color: "black" }} />
                        </div> */}
                      </div>
                    </div>
                    <div className="sale-product-image">
                      <img src="./../assets/images/black_gamepad.png" className="product-image" />
                    </div>
                  </div>
                  <div className="sale-product-lower">
                    <p className="product-name">Quilted Satin Jacket</p>
                    <div className="price">
                      <p className="current">$750</p>
                      
                    </div>
                    
                  </div>
                </div>  
                <div className="sale-product">
                  <div className="sale-product-main">
                    <div className="sale-product-btn">
                      <div className=""></div>
                      <div className="sale-product-icon">
                        <div className="icon-circle">
                          <FiTrash2 size={24}/>
                        </div>
                        {/* <div className="icon-circle">
                          <FiEye className="icon-outline" style={{ color: "black" }} />
                        </div> */}
                      </div>
                    </div>
                    <div className="sale-product-image">
                      <img src="./../assets/images/women_jacket.png" className="product-image" />
                    </div>
                  </div>
                  <div className="sale-product-lower">
                    <p className="product-name">Quilted Satin Jacket</p>
                    <div className="price">
                      <p className="current">$750</p>
                      
                    </div>
                    
                  </div>
                </div>
              </div>
            </section>
      <section className="third-section">
        <div className="flash-sales-container">
          <div className="headline-icon">
            <div>
            <div className="today-icon"></div>
            <div className="flash-sale-title" style={{color:"#DB4444",fontSize:"20px"}}>Just For You</div>
            </div>
            <button className='see-all'>See All</button>
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
                  {/* <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div> */}
                  <div className="icon-circle">
                    <FiEye className="icon-outline" />
                  </div>
                </div>
              </div>
              <div className="sale-product-image">
                <img src="./../assets/images/laptop.png" className="product-image" />
              </div>
            </div>
            <div className="sale-product-lower">
              <p className="product-name">ASUS FHD Gaming Laptop</p>
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
                <div className=""></div>
                <div className="sale-product-icon">
                  {/* <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div> */}
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
                <p className="current">$1160</p>
               
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
                <div className="dis-btn" style={{backgroundColor:"#00FF66",color:"white", width:"60px"}}>NEW</div>
                <div className="sale-product-icon">
                  {/* <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div> */}
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
                  {/* <div className="icon-circle">
                    <FaRegHeart className="icon-outline" />
                  </div> */}
                  <div className="icon-circle">
                    <FiEye className="icon-outline" style={{ color: "black" }} />
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
                <p className="current">$200</p>
                
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
  )
}
export default Wishlist;