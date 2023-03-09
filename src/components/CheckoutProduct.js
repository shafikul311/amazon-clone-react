import React from "react";
import { useStateValue } from "../context/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, image, price, rating }) {
   const [{ basket }, dispatch] = useStateValue();

   const removeFromBasket = () => {
      dispatch({
         type: "REMOVE_FROM_CART",
         id: id,
      });
   };
   return (
      <div className="checkoutProduct">
         <img className="checkoutProduct__image" src={image} alt="" />
         <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <strong>{price}</strong>
            <div className="checkoutProduct__rating">
               {Array(rating)
                  .fill()
                  .map((_, i) => (
                     <p>🌟</p>
                  ))}
            </div>
            <button onClick={removeFromBasket}>Remove from Basket</button>
         </div>
      </div>
   );
}

export default CheckoutProduct;
