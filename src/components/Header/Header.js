import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className='header'>
            <Link to="/">
                <img className='header__logo' src="https://m.media-amazon.com/images/G/31/social_share/amazon_logo._CB633266945_.png" alt="" />
            </Link>

            <div className='header__search'>
                <input className='header__searchInput' type="text" name="" id="" />
                <SearchIcon className='header__searchIcon' />

            </div>
            <div className='header__nav'>

                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Hello' Shafikul
                    </span>
                    <span className='header__optionLineTwo'>
                        Sign_in
                    </span>

                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Returns
                    </span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>

                </div>

                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        & prime
                    </span>

                </div>
                <div className="header__optionBasket">
                    <Link to="/checkout">
                        <ShoppingCartCheckoutIcon />
                    </Link>
                    <span className="header__optionBasketCount">
                        0
                    </span>


                </div>

            </div>

        </div>
    )
}

export default Header;

