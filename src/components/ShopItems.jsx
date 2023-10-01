export default function ShopItems({ items, addToCart }) {
  return (
    <div className="shop-items-grid">
      {items.map((item) => (
        <div key={item.id} className="shop-item">
          <div className="shop-item-img-container">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="shop-item-details">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <button
              className="add-cart-btn hover-animation"
              onClick={() =>
                addToCart({
                  id: item.id,
                  name: item.title,
                  price: item.price,
                })
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
