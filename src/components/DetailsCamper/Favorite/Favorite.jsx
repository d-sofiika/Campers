import css from "./Favorite.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../../redux/slices/favoriteSlice";
import { selectIsFavorite } from "../../../redux/selectors";

export default function Favorite({ camperId }) {
  const dispatch = useDispatch();
 
  const isFavorite = useSelector((state) => selectIsFavorite(state, camperId));

  const handleToggle = () => {
    dispatch(toggleFavorite(camperId));
  };

  return (
    <button
      type="button"
      className={isFavorite ? css.active : css.inactive}
      onClick={handleToggle}
    >
      <svg width="26" height="24" className={css.heartIcon}>
        <use href="/src/img/sprite.svg#icon-heart"></use>
      </svg>
    </button>
  );
}
