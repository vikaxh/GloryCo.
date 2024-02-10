import axios from "axios";
import {toast} from "react-toastify";
import {
  addToCart,
  removeFromCart,
  saveShippinginfo,
} from "../reducers/Cart Slice/cartSlice";

export const addItemsTocart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/v1/product/${id}`);
  const payload = {
    product: data.product._id,
    name: data.product.name,
    price: data.product.price,
    image: data.product.images[0].url,
    stock: data.product.stock,
    quantity: quantity,
  };
  toast.success(data.product.name + " added to cart")
  dispatch(addToCart(payload));
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeItemsFromCart = (id,quantity) => async (dispatch, getState) => {
 if(quantity){
  const { data } = await axios.get(`/api/v1/product/${id}`);
  const payload = {
    product: data.product._id,
    name: data.product.name,
    price: data.product.price,
    image: data.product.images[0].url,
    stock: data.product.stock,
    quantity: quantity,
  };
  toast.success(data.product.name + " Removed from cart")
  dispatch(addToCart(payload));
 }
 else
  dispatch(removeFromCart(id))
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const saveTheShippingInfo = (shippingData) => async (dispatch, getState) => {
    dispatch(saveShippinginfo(shippingData));
    localStorage.setItem("shippingInfo", JSON.stringify(shippingData));
};
