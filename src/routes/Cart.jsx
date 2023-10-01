import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Cart() {
  const { cart, updateQuantity } = useOutletContext();
  const [total, setTotal] = useState(0);

  const updateTotal = () => {
    let cartTotal = 0;
    cart.forEach((item) => {
      cartTotal += item.price * item.quantity;
    });
    setTotal(cartTotal);
  };

  useEffect(() => {
    updateTotal();
  }, [JSON.stringify(cart)]);

  return (
    <div id="cart">
      {cart.length === 0 ? (
        <p className="error">Uh oh! Cart is empty!</p>
      ) : (
        <>
          <h1>Cart</h1>
          <div className="cart-grid">
            <div className="cart-flex">
              {cart.map((item) => (
                <div className="small-item-display" key={item.id}>
                  {item.name} - ${item.price} -
                  <input type="number" min="0" defaultValue={item.quantity} onChange={(e) => updateQuantity(item.id, e.target.value)}></input>
                </div>
              ))}
            </div>
            <div className="price-info">
              <h3>Total: ${total.toFixed(2)}</h3>
              <button>Pay now!</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
