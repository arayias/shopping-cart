import { useOutletContext } from 'react-router-dom';

export default function Cart(ctx) {
  const { cart } = useOutletContext();
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
                  {item.name} - ${item.price} - {item.quantity}
                </div>
              ))}
            </div>
            <div className="price-info">
              <h3>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</h3>
              <button>Pay now!</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
