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
            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  {item.name} - ${item.price} - {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
