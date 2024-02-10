import React from 'react'
import "./cartItemCard.css";
import { Link } from 'react-router-dom';

const CartItemCard = ({item , deleteCartItems}) => {
  console.log(item);
  return (
   <div className="cartItemCard">
    <img src={item.image} alt="Please refresh" />
    <div>
      <Link to={`/product/${item.product}`}>{item.name}</Link>
      <span>{`Price: ₹${item.price}`}</span>
      <p onClick={() => deleteCartItems(item.product)}>remove</p>
    </div>
   </div>
  )
}

export default CartItemCard
