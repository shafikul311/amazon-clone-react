import React from 'react'
import Subtotal from '../../components/Subtotal'
import './Checkout.css'

function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <div className="checkout__title">
                    <h2>Your shopping basket</h2>
                </div>

            </div>
            <div className="checkout__right">
                <Subtotal />

                {/* <button>Proceed to checkout</button> */}

                {/* basketItem */}
                {/* basketItem */}

            </div>
        </div>
    )
}

export default Checkout