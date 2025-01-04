import { Link, Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import css from "./Product.module.css";

const Product = () => {
  return (
    <div className={css.section}>
      <Header />
      <ul>
        <li>
          <Link to="features">Features</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Product;
