import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../data/productData';

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const product = productData.find((item) => item.id === id);

  const [selectedSize, setSelectedSize] = useState('Medium');
  const [selectedColor, setSelectedColor] = useState('Black');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === 'inc' ? prev + 1 : prev > 1 ? prev - 1 : 1
    );
  };

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h2>{product.name}</h2>
        <p className="price">{product.price}</p>
        <p className="desc">
          This premium quality fabric is designed for all-day comfort and style.
          Breathable, lightweight, and easy to pair with your favorite jeans or joggers.
        </p>

        <div className="options">
          <div className="size-options">
            <h4>Size:</h4>
            {['Medium', 'Large', 'X-Large'].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? 'selected' : ''}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <div className="color-options">
            <h4>Color:</h4>
            {['Black', 'Brown'].map((color) => (
              <button
                key={color}
                className={selectedColor === color ? 'selected' : ''}
                onClick={() => setSelectedColor(color)}
              >
                {color}
              </button>
            ))}
          </div>

          <div className="quantity-selector">
            <h4>Quantity:</h4>
            <button onClick={() => handleQuantityChange('dec')}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange('inc')}>+</button>
          </div>
        </div>

        <button className="buy-btn">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetail;
