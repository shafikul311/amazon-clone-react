import React from "react";
import CheckoutProduct from "../../components/CheckoutProduct";
import Subtotal from "../../components/Subtotal";
import { useStateValue } from "../../context/StateProvider";
import "./Checkout.css";

function Checkout() {
   const [{ basket }, dispatch] = useStateValue();
   return (
      <div className="checkout">
         <div className="checkout__left">
            <h2>Your shopping basket</h2>
            {basket.map((item) => (
               <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
               />
            ))}
         </div>
         <div className="checkout__right">
            <Subtotal />
         </div>
      </div>
   );
}

export default Checkout;
