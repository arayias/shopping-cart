import { useOutletContext } from 'react-router-dom';
import Loader from '../components/Loader';
import ShopItems from '../components/ShopItems';
import { useState, useEffect } from 'react';

export default function Shop() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useOutletContext();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        if (!res.ok) {
          setError(res);
        }
        setItems(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
      }
    })();
  }, []);

  return (
    <div id="shop">
      <h1>Shop</h1>
      {error ? (
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      ) : isLoading ? (
        <Loader />
      ) : (
        <ShopItems items={items} addToCart={addToCart} />
      )}
    </div>
  );
}
