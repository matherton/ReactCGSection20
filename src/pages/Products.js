import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h1>The Product Page</h1>
      <ul>
        <li>
          <Link to="/products/p1">a book</Link>
        </li>
        <li>
          <Link to="/products/p2">a carpet</Link>
        </li>
        <li>
          <Link to="/products/p3">a rug</Link>
        </li>
      </ul>
    </section>
  );
};

export default Product;
