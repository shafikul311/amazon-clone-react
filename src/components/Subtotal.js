import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import "./Subtotal.css";

function Subtotal() {
   const [{ basket }, dispatch] = useStateValue();
   return (
      <div className="subtotal">
         <CurrencyFormat
            value={1500.050035}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
            renderText={(value) => (
               <div>
                  <p>
                     Your subtotal ( <strong>{basket.length} </strong>items){" "}
                     <strong>{getBasketTotal(basket)}</strong>
                  </p>
               </div>
            )}
         />

         <div className="subtotal__gift">
            <input type="checkbox" name="" id="" />
            <p>
               Check,if you agree to Amazon's Conditions of Use and Privacy .{" "}
            </p>
         </div>
         <button>Proceed to checkout</button>
      </div>
   );
}

export default Subtotal;
