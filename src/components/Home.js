import React, { useState, useEffect } from 'react'
import img2 from '../components/white t-shirt.jpg'
import img4 from '../components/t-shirt.png'
import img5 from '../components/cottonT-shirt.jpg'
import img6 from '../components/best-fitted-shirt-sleeve-shirt.jpg'
import img7 from '../components/dropShoulder.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);  // State initialization
  const images = [img5, img6, img7];  // Array of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  }
  return (
    <>
    {/* This content is for laptops */}
    <div className='homepage-container'>


      <div className="slideshow-container">
        <div className="slideshow-images">
          <img src={images[currentIndex]} alt="slideshow" />
        </div>
        <div className="dots-container">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>

      <div className="pro-con">
        <h3 className='flash-sale'>Flash Sales</h3>

        <div className="products">
          {/* product no 1 */}
          <Link to={`/product/1`}>
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
</Link>
          {/* product no 2 */}

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
</Link>


          {/* product no 3 */}

          <Link to={`/product/3`}>
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
</Link>
<Link to={`/product/4`}>
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
</Link>

{/* product no 5 */}
<Link to={`/product/5`}>
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
</Link>

{/* product no 6 */}
<Link to={`/product/6`}>
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
</Link>

{/* product no 7 */}
<Link to={`/product/7`}>
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
</Link>
        </div>
      </div>

    </div>
    {/* This Content if for mobile phone */}
    
    </>

  )
}

export default Home