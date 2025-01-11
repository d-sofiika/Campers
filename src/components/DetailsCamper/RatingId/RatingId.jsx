import css from "./RatingId.module.css"
export default function RatingID({ rating }) {
  const stars = Array.from({ length: 5 }, (_, index) =>
    index < rating ? (
      <svg width="16" height="16" className={css.starIcon} key={index}>
        <use href="/src/img/sprite.svg#icon-star-2"></use>
      </svg>
    ) : (
      <svg width="16" height="16" className={css.starIcon} key={index}>
        <use href="/src/img/sprite.svg#icon-star"></use>
      </svg>
    )
  );

  return <div className={css.starWrapper}>{stars}</div>;
}
