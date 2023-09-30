import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link className="hover-animation" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover-animation" to="/shop">
                Shop
              </Link>
            </li>
            <li>
              <Link className="hover-animation" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover-animation" to="/cart">
                Cart
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
