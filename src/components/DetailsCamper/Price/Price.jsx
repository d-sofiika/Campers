import css from "./Price.module.css";

export default function Price({ name, price }) {
  return (
    <div className={css.cover}>
        <h3 className={css.name}>{name}</h3>
      <div className={css.coverPrice}>
        <p className={css.price}>{`€${price}.00`}</p>
        <svg width="26" height="24" className={css.heartIcon}>
          <use href="/src/img/sprite.svg#icon-heart"></use>
        </svg>
      </div>
      
    </div>
  );
}
