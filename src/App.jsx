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

  const updateQuantity = (id, quantity) => {
    setCart([
      ...cart
        .map((item) => {
          if (item.id === id) {
            item.quantity = quantity;
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    ]);
    console.log(cart);
  };

  return (
    <>
      <Navigation cart={cart} addToCart={addToCart} />
      <main>
        <Outlet
          context={{
            cart: cart,
            addToCart: addToCart,
            updateQuantity: updateQuantity,
          }}
        />
      </main>
    </>
  );
}

export default App;
