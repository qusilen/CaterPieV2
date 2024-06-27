import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Toplam ({basket.length} ürün): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Bu siparişi Hediye olarak hazırlat
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₺"}
      />

      <button onClick={e => history.push('/payment')}>Ödemeye Geç</button>
    </div>
  );
}

export default Subtotal;
