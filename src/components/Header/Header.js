import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
import { getAuth, signOut } from "firebase/auth";

function Header() {
   const [{ basket, user }] = useStateValue();
   const navigate = useNavigate();

   const handelSignOut = (e) => {
      e.preventDefault();
      const auth = getAuth();
      signOut(auth)
         .then(() => {
            // Sign-out successful.
            navigate("/signUp");
            console.log(user.email, "sign out success");
         })
         .catch((error) => {
            // An error happened.
            console.log(error.message);
         });
   };

   return (
      <div className="header">
         <Link to="/">
            <img
               className="header__logo"
               src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
               alt=""
            />
         </Link>

         <div className="header__search">
            <input className="header__searchInput" type="text" name="" id="" />
            <SearchIcon className="header__searchIcon" />
         </div>
         <div className="header__nav">
            <Link to="signup">
               <div className="header__option">
                  <span className="header__optionLineOne">
                     Hello' {user ? user.email : "Guest"}
                  </span>
                  <span className="header__optionLineTwo">
                     {user ? (
                        <button onClick={handelSignOut}>Sign Out</button>
                     ) : (
                        <Link to="signup">
                           <button>Sign In</button>
                        </Link>
                     )}
                  </span>
               </div>
            </Link>

            <div className="header__option">
               <span className="header__optionLineOne">Returns</span>
               <span className="header__optionLineTwo">& Orders</span>
            </div>

            <div className="header__option">
               <span className="header__optionLineOne">Your</span>
               <span className="header__optionLineTwo">& prime</span>
            </div>
            <Link to="checkout">
               <div className="header__optionBasket">
                  <ShoppingCartCheckoutIcon />
                  <span className="header__optionBasketCount">
                     {basket?.length}
                  </span>
               </div>
            </Link>
         </div>
      </div>
   );
}

export default Header;
