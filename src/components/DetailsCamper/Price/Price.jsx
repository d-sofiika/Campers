import Favorite from "../Favorite/Favorite";
import css from "./Price.module.css";

export default function Price({ name, price, id}) {
console.log("Rendering Price for:", id);
  return (
    <div className={css.cover}>
      <h3 className={css.name}>{name}</h3>
      <div className={css.coverPrice}>
        <p className={css.price}>{`€${price}.00`}</p>
        <Favorite camperId={id}/>
      </div>
    </div>
  );
}
