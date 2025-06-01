import React from 'react'
import img1 from '../components/slider.png'
import '../css files/Home.css';

import img2 from '../components/white t-shirt.jpg'
import img4 from '../components/t-shirt.png'
import img5 from '../components/cottonT-shirt.jpg'
import img6 from '../components/best-fitted-shirt-sleeve-shirt.jpg'
import img7 from '../components/dropShoulder.jpg'
import { Link } from 'react-router-dom';

const Home = () => {

const products = [
    { id: 1, img: img2, name: "Cotton t-shirt Casual for mens in white color", price: "Rs:36,876 PKR" },
    { id: 2, img: img2, name: "Men's Printed Oversize Drop Shoulder T-Shirt", price: "Rs:36,876 PKR" },
    { id: 3, img: img5, name: "TRIPR Solid Men Henley Neck Brown T-Shirt", price: "Rs:36,876 PKR" },
    { id: 4, img: img4, name: "VIAOUR Tshirt White | Amazon.com", price: "Rs:36,876 PKR" },
    { id: 5, img: img5, name: "Premium quality hoodie", price: "Rs:36,876 PKR" },
    { id: 6, img: img6, name: "Classic Fit Men's Polo T-Shirt", price: "Rs:36,876 PKR" },
    { id: 7, img: img7, name: "VIAOUR Tshirt White | Amazon.com", price: "Rs:36,876 PKR" },
  ];



  
  return (
    <>
    {/* This content is for laptops */}
    <div className='homepage-container'>


      <div className="slideshow-container">
        <div className="slideshow-image">
          <img src={img1} alt="slideshow" />
        </div>
        {/* <div className="dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div> */}
      </div>





<div className="product-section">
      <h2 className="section-title">Flash Sales</h2>
      <div className="decorative-line">
        <span></span><i className="fas fa-star"></i><span></span>
      </div>

      <div className="product-grid">
        {products.slice(0, 4).map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="product-card">
            <div className="product-image-container">
              <img src={item.img} alt="product" />
              <div className="product-icons">
                <i className="fas fa-shopping-cart"></i>
                <i className="fas fa-heart"></i>
              </div>
            </div>
            <div className="product-details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </Link>
        ))}
      </div>

      <h2 className="section-title">New Arrival</h2>
      <div className="decorative-line">
        <span></span><i className="fas fa-leaf"></i><span></span>
      </div>

      <div className="product-grid">
        {products.slice(4).map((item) => (
          <Link to={`/product/${item.id}`} key={item.id} className="product-card">
            <div className="product-image-container">
              <img src={item.img} alt="product" />
              <div className="product-icons">
                <i className="fas fa-shopping-cart"></i>
                <i className="fas fa-heart"></i>
              </div>
            </div>
            <div className="product-details">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>































       {/* <div className="pro-con">
         <h3 className='flash-sale'>Flash Sales</h3>

         <div className="products"> */}
          {/* product no 1 */}
          {/* <Link to={`/product/1`}>
  <div className="pro-one">
    <img src={img5} alt="image" className='pro1-img' />
    <div className="pro1-icons">
      <i className="fas fa-shopping-cart "></i>
      <i className="fas fa-heart "></i>
    </div>
    <div className="pro1-detail">
      <h3 className='pro1-name'>Cotton t-shirt Casual for mens in white color</h3>
      <p className='pro1-price'>Rs:36,876 PKR</p>
    </div>
  </div>
</Link> */}
          {/* product no 2 */}
{/* 
          <Link to={`/product/2`}>
  <div className="pro-two">
    <img src={img7} alt="image" className='pro2-img' />
    <div className="pro2-icons">
      <i className="fas fa-shopping-cart "></i>
      <i className="fas fa-heart "></i>
    </div>
    <div className="pro2-detail">
      <h3 className='pro2-name'>Men's Printed Oversize Drop Shoulder T-Shirt.</h3>
      <p className='pro2-price'>Rs:36,876 PKR</p>
    </div>
  </div>
</Link> */}


          {/* product no 3 */}

          {/* <Link to={`/product/3`}>
  <div className="pro-three">
    <img src={img6} alt="image" className='pro3-img' />
    <div className="pro3-icons">
      <i className="fas fa-shopping-cart "></i>
      <i className="fas fa-heart "></i>
    </div>
    <div className="pro3-detail">
      <h3 className='pro3-name'>TRIPR Solid Men Henley Neck Brown T-Shirt </h3>
      <p className='pro3-price'>Rs:36,876 PKR</p>
    </div>
  </div>
</Link> */}
{/* <Link to={`/product/4`}>
  <div className="pro-four">
    <img src={img4} alt="image" className='pro4-img' />
    <div className="pro4-icons">
      <i className="fas fa-shopping-cart "></i>
      <i className="fas fa-heart "></i>
    </div>
    <div className="pro4-detail">
      <h3 className='pro4-name'>VIAOUR Tshirt White | Amazon.com</h3>
      <p className='pro4-price'>Rs:36,876 PKR</p>
    </div>
  </div>
</Link> */}

{/* product no 5 */}
{/* <Link to={`/product/5`}>
  <div className="pro-five">
    <img src={img2} alt="image" className='pro5-img' />
    <div className="pro5-icons">
      <i className="fas fa-shopping-cart "></i>
      <i className="fas fa-heart "></i>
    </div>
    <div className="pro5-detail">
      <h3 className='pro5-name'>VIAOUR Tshirt White | Amazon.com</h3>
      <p className='pro5-price'>Rs:36,876 PKR</p>
    </div>
  </div>
</Link> */}

{/* product no 6 */}
{/* <Link to={`/product/6`}>
  <div className="pro-six">
    <img src={img5} alt="image" className='pro6-img' />
    <div className="pro6-icons">
      <i className="fas fa-shopping-cart "></i>
      <i className="fas fa-heart "></i>
    </div>
    <div className="pro6-detail">
      <h3 className='pro6-name'>Premium quality hoodie</h3>
      <p className='pro6-price'>Rs:36,876 PKR</p>
    </div>
  </div>
</Link> */}

{/* product no 7 */}
{/* <Link to={`/product/7`}>
  <div className="pro-seven">
    <img src={img7} alt="image" className='pro7-img' />
    <div className="pro7-icons">
      <i className="fas fa-shopping-cart "></i>
      <i className="fas fa-heart"></i>
    </div>
    <div className="pro7-detail">
      <h3 className='pro7-name'>VIAOUR Tshirt White | Amazon.com</h3>
      <p className='pro7-price'>Rs:36,876 PKR</p>
    </div>
  </div>
</Link> */}
        {/* </div>
      </div>  */}

    </div>
    
    </>

  )
}

export default Home