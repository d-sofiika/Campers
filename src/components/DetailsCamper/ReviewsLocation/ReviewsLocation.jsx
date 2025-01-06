import css from "./ReviewsLocation.module.css"

export default function ReviewsLocation({ rating, reviews, location, }) {
  return <div className={css.cover}>
    <div className={css.coverRating}>
    <svg width="16" height="16" className={css.starIcon}>
      <use href="/src/img/sprite.svg#icon-star-2"></use>
    </svg>
      <p>{`${rating}(${reviews.length} Reviews)`}</p>
      </div>
    <div className={css.coverLocation} ><svg width="20" height="20" className={css.inputIcon}>
      <use href="/src/img/sprite.svg#icon-map"></use>
    </svg>
      <p>{location}</p>
      </div>
  </div>;
};
