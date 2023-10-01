import React from 'react';
import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (item, quantity = 1) => {
    const existingItem = cart.find((i) => i.id === item.id);

    existingItem
      ? (existingItem.quantity += quantity)
      : setCart([
          ...cart,
          {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: quantity,
          },
        ]);
  };

  return (
    <>
      <Navigation cart={cart} addToCart={addToCart} />
      <main>
        <Outlet
          context={{
            cart: cart,
            addToCart: addToCart,
          }}
        />
      </main>
    </>
  );
}

export default App;
