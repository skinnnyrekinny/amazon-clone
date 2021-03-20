import React, { useState } from 'react';
import './Payment.css';
import { useStateValue} from "./StateProvider";
import CheckoutProduct from './CheckoutProduct';
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { basketCalculateTotal } from "./Subtotal";


function Payment() {

    const [{ basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null)
    const [disbled, setDisabled] = useState(true);

    const handleSubmit = e => {
        //do all the fansy stripe stuff
    }

    const handleChange = event => {
        //listen for changes in the cardElement
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (<Link to="/checkout">
                            {basket?.length} items
                        </Link>)
                </h1>
                {/* Payment section - delivery adress*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>
                            Delivery Adress
                        </h3>
                    </div>
                    <div className="payment__address">
                        <p>
                            {user?.email}
                        </p>
                        <p>137 Wolka</p>
                        <p>NY City</p>
                    </div>
                </div>
                {/* Payment section - reviem items */}
                
                <div className="payment__section">
                    <div className="payment__title">
                        <h3> Review items and delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment section - payment method*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment method</h3>
                    </div>
                    <div className="payment__details">
                        {/* Stripe magic will happen here*/}
                        <form>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                    )}
                                decimalScale={2}
                                value={basketCalculateTotal({basket})}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
