import React from "react";
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";



function ProductCard({product}) {

  const options = {
    edit : false,
    color : "rgba(20,20,20,0.1)",
    activeColor: 'rgb(50, 16, 92)',
    size: window.innerWidth < 600 ? 20 : 22,
    value:product.ratings,
    isHalf:true
  };
  
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product?.images[0]?.url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} />
        <span>({product.reviews.length} Reviews)</span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  )
}

export default ProductCard;
