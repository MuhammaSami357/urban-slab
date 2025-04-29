import React,{useState} from 'react'
import img1 from '../components/about1.png'
import img2 from '../components/about2.png'
import img3 from '../components/firstlogo.png'
import img4 from '../components/t-shirt.png'

const BlogPage = () => {


  const posts = [
    {
      title: '5 Ways to Style Your T-Shirts for a Casual Look',
      image: img1,
      excerpt: 'Discover simple and stylish ways to wear your T-shirts for casual occasions.',
      details: 'T-shirts can be styled with jeans, shorts, or joggers. Add accessories like caps or watches to elevate your casual look. Layering with an open shirt or jacket also works well.'
    },
    {
      title: 'Why Oversized Tees are Trending in 2025',
      image: img2,
      excerpt: 'Oversized T-shirts are dominating men\'s fashion. Learn why they are a must-have.',
      details: 'Oversized T-shirts offer a relaxed fit and are great for casual, street, and athleisure styles. Pair them with skinny jeans or shorts for a balanced silhouette.'
    },
    {
      title: 'The Best T-Shirt Fabrics for Comfort and Style',
      image: img3,
      excerpt: 'Cotton or polyester? Find out which fabric suits you best.',
      details: 'Cotton is breathable and comfortable, while polyester is moisture-wicking and durable. Blended fabrics provide a mix of both qualities.'
    },
    {
      title: 'How to Layer T-Shirts for a Smart Casual Look',
      image: img4,
      excerpt: 'Layer your T-shirts like a pro with these easy tips.',
      details: 'Start with a fitted T-shirt as a base. Add a button-up shirt, jacket, or blazer for a smart-casual style. Neutral colors work best for layering.'
    },
    {
      title: 'How to Layer T-Shirts for a Smart Casual Look',
      image: img4,
      excerpt: 'Layer your T-shirts like a pro with these easy tips.',
      details: 'Start with a fitted T-shirt as a base. Add a button-up shirt, jacket, or blazer for a smart-casual style. Neutral colors work best for layering.'
    },
    {
      title: 'How to Layer T-Shirts for a Smart Casual Look',
      image: img4,
      excerpt: 'Layer your T-shirts like a pro with these easy tips.',
      details: 'Start with a fitted T-shirt as a base. Add a button-up shirt, jacket, or blazer for a smart-casual style. Neutral colors work best for layering.'
    },
    {
      title: 'How to Layer T-Shirts for a Smart Casual Look',
      image: img4,
      excerpt: 'Layer your T-shirts like a pro with these easy tips.',
      details: 'Start with a fitted T-shirt as a base. Add a button-up shirt, jacket, or blazer for a smart-casual style. Neutral colors work best for layering.'
    },
    {
      title: 'How to Layer T-Shirts for a Smart Casual Look',
      image: img4,
      excerpt: 'Layer your T-shirts like a pro with these easy tips.',
      details: 'Start with a fitted T-shirt as a base. Add a button-up shirt, jacket, or blazer for a smart-casual style. Neutral colors work best for layering.'
    },
    {
      title: 'How to Layer T-Shirts for a Smart Casual Look',
      image: img4,
      excerpt: 'Layer your T-shirts like a pro with these easy tips.',
      details: 'Start with a fitted T-shirt as a base. Add a button-up shirt, jacket, or blazer for a smart-casual style. Neutral colors work best for layering.'
    },
    {
      title: 'How to Layer T-Shirts for a Smart Casual Look',
      image: img4,
      excerpt: 'Layer your T-shirts like a pro with these easy tips.',
      details: 'Start with a fitted T-shirt as a base. Add a button-up shirt, jacket, or blazer for a smart-casual style. Neutral colors work best for layering.'
    },
    {
      title: 'How to Layer T-Shirts for a Smart Casual Look',
      image: img4,
      excerpt: 'Layer your T-shirts like a pro with these easy tips.',
      details: 'Start with a fitted T-shirt as a base. Add a button-up shirt, jacket, or blazer for a smart-casual style. Neutral colors work best for layering.'
    },
    {
      title: 'How to Layer T-Shirts for a Smart Casual Look',
      image: img4,
      excerpt: 'Layer your T-shirts like a pro with these easy tips.',
      details: 'Start with a fitted T-shirt as a base. Add a button-up shirt, jacket, or blazer for a smart-casual style. Neutral colors work best for layering.'
    },
  ];

  const [expanded, setExpanded] = useState(Array(posts.length).fill(false));

  const toggleExpand = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <div className="blog-container">
       <h1 className="blog-title">CozyWear Men's T-Shirts Blog</h1>
       <div className="blog-grid">
       {posts.map((post, index) => (
          <div className={`blog-card ${expanded[index] ? 'expanded' : ''}`} key={index}>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-excerpt">{post.excerpt}</p>
              {expanded[index] && (
                <p className="blog-details">{post.details}</p>
              )}
              <button className="read-more" onClick={() => toggleExpand(index)}>
                {expanded[index] ? 'Show Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
       </div>

      {/*
      
        
      </div> */}
    </div>
  );
};

export default BlogPage;
