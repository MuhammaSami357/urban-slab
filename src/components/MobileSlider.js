import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../components/about1.png'
import img2 from '../components/about2.png'
import img3 from '../components/firstlogo.png'
import img4 from '../components/dropShoulder.jpg'
import img5 from '../components/cottonT-shirt.jpg'
import img6 from '../components/DropTees.jpg'
import img7 from '../components/mensT-shirt.jpg'
import img8 from '../components/kargoPant.jpg'

const MobileSlider = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [img1, img2, img3];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  
  return (
    <div className="slider-container">
      <div className="mob-slider">
        <button className="arrow left" onClick={prevSlide}>
          <i className="fa fa-chevron-left"></i>
        </button>
        <div className="slides" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Slide ${index + 1}`} />
          ))}
        </div>
        <button className="arrow right" onClick={nextSlide}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>

      <div className="mob-pro-con">
  <h4>Flash Sales</h4>
   <div className="mob-products">
{/* Product 1 */}
<Link to={`/MobileProduct/1`}>
<div className="mob-pro-one">
  <img src={img1} alt="image" className='mob-one-img' />
  <div className="mob-one-icons">
    <i className="fas fa-shopping-cart icon"></i>
    <i className="fas fa-heart icon"></i>
  </div>
  <div className="mob-one-detail">
    <h3 className='mob-one-name'>Premium Quality Hoodie</h3>
    <div className='mob-price-container'>
      <p className='mob-old-price'>Rs:45,000 PKR</p>
      <p className='mob-one-price'>Rs:36,876 PKR</p>
    </div>
    <button className='buy-now-btn' >Shop Now</button>

  </div>
</div>
</Link>
{/* Product 2 */}
<Link to={`/MobileProduct/2`}>
<div className="mob-pro-two">
  <img src={img4} alt="image" className='mob-one-img' />
  <div className="mob-one-icons">
    <i className="fas fa-shopping-cart icon"></i>
    <i className="fas fa-heart icon"></i>
  </div>
  <div className="mob-one-detail">
    <h3 className='mob-one-name'>Mens Drop Shoulder shirt | CozyWear</h3>
    <div className='mob-price-container'>
      <p className='mob-old-price'>Rs:41,000 PKR</p>
      <p className='mob-one-price'>Rs:36,876 PKR</p>
    </div>
    <button className='buy-now-btn' >Shop Now</button>
  
  </div>
</div>
</Link>
{/* Product 3 */}
<Link to={`/MobileProduct/3`}>
<div className="mob-pro-three">
  <img src={img5} alt="image" className='mob-one-img' />
  <div className="mob-one-icons">
    <i className="fas fa-shopping-cart icon"></i>
    <i className="fas fa-heart icon"></i>
  </div>
  <div className="mob-one-detail">
    <h3 className='mob-one-name'>Premium Quality Hoodie</h3>
    <div className='mob-price-container'>
      <p className='mob-old-price'>Rs:42,000 PKR</p>
      <p className='mob-one-price'>Rs:36,876 PKR</p>
    </div>
    <button className='buy-now-btn' >Shop Now</button>
   
  </div>
</div>
</Link>
{/* Product 4 */}
<Link to={`/MobileProduct/4`}>
<div className="mob-pro-four">
  <img src={img6} alt="image" className='mob-one-img' />
  <div className="mob-one-icons">
    <i className="fas fa-shopping-cart icon"></i>
    <i className="fas fa-heart icon"></i>
  </div>
  <div className="mob-one-detail">
    <h3 className='mob-one-name'>Premium Quality Hoodie</h3>
    <div className='mob-price-container'>
      <p className='mob-old-price'>Rs:44,000 PKR</p>
      <p className='mob-one-price'>Rs:36,876 PKR</p>

    </div>
    <button className='buy-now-btn' >Shop Now</button>
    

  </div>
</div>
</Link>
{/* Product 5 */}
<Link to={`/MobileProduct/5`}>
<div className="mob-pro-five">
  <img src={img8} alt="image" className='mob-one-img' />
  <div className="mob-one-icons">
    <i className="fas fa-shopping-cart icon"></i>
    <i className="fas fa-heart icon"></i>
  </div>
  <div className="mob-one-detail">
    <h3 className='mob-one-name'>Men Brown Cargo Trousers -- CozyWear... </h3>
    <div className='mob-price-container'>
      <p className='mob-old-price'>Rs:43,000 PKR</p>
      <p className='mob-one-price'>Rs:36,876 PKR</p>
    </div>
    <button className='buy-now-btn' >Shop Now</button>

  </div>
</div>
</Link>
{/* Product 6 */}
<Link to={`/MobileProduct/6`}>
<div className="mob-pro-six">
  <img src={img7} alt="image" className='mob-one-img' />
  <div className="mob-one-icons">
    <i className="fas fa-shopping-cart icon"></i>
    <i className="fas fa-heart icon"></i>
  </div>
  <div className="mob-one-detail">
    <h3 className='mob-one-name'>Men Printed t-shirt A+ -- CozyWear...</h3>
    <div className='mob-price-container'>
      <p className='mob-old-price'>Rs:46,000 PKR</p>
      <p className='mob-one-price'>Rs:36,876 PKR</p>
    </div>
    <button className='buy-now-btn' >Shop Now</button>
  </div>
</div>
</Link>



  </div> 
</div>

    </div>

  );
};

export default MobileSlider;
