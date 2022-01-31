import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <header>
      <nav>
        <ol>
          <li>
            <Link to="/Welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
        </ol>
      </nav>
    </header>
  );
};

export default MainHeader;
