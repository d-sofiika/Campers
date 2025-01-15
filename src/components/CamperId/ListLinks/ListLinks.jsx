import { Link, useLocation } from "react-router-dom";
import css from "./ListLinks.module.css"


export default function ListLinks() {
    const location = useLocation();
  return (
    <ul className={css.linkList}>
          <li>
            <Link
              className={
                location.pathname.includes("/features")
                  ? `${css.linkItem} ${css.activeLink}`
                  : css.linkItem
              }
              to="features"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              className={
                location.pathname.includes("/reviews")
                  ? `${css.linkItem} ${css.activeLink}`
                  : css.linkItem
              }
            >
              Reviews
            </Link>
          </li>
        </ul>
  );
}
