import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';
import {useHistory} from 'react-router-dom';

export { basketCalculateTotal }

function Subtotal() {

    const history = useHistory();

    const [{ basket }, dispatch] = useStateValue();
    
    const basketCalculateTotal = (basket) => {
        return basket.reduce((price, item) => item.price + price, 0);
    };

    return (
        <div className="subtotal">
            <CurrencyFormat
            renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket?.length} items):
                        <strong>${`${basketCalculateTotal(basket)}`}</strong>
                    </p>
                    <small className="subtotal__gift">
                        <input type="checkbox" /> This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={0}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button onClick={e => history.push('/payment')}> Proceed to Checkout</button>
         </div>
    )
}

export default Subtotal;
