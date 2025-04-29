import React, { useEffect, useState } from 'react';
import axios from 'axios';
import arrivals from '../components/arrivals.jpg'

const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);

  const productsPerPage = 32; // 8 rows × 4 products per row
  const totalPages = 3;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products?limit=96");
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const indexOfLastProduct = page * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className='arrival-container'>
      <div className="arrival-img-con">
        <img src={arrivals} alt="New Arrivals" />
      </div>
      
      <h2>New Arrivals</h2>
      <div className="arrival-products">
        {currentProducts.map((product) => (
          <div key={product.id} className="arrival-pro-all">
            <img src={product.thumbnail} alt={product.title} className='arrival-pro-img' />
            <div className="arrival-pro-icons">
              <i className="fas fa-shopping-cart icon"></i>
              <i className="fas fa-heart icon"></i>
            </div>
            <div className="arrival-pro-detail">
              <h3 className='arrival-pro-name'>{product.title}</h3>
              <p className='arrival-pro-price'>Rs: {product.price} PKR</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;
