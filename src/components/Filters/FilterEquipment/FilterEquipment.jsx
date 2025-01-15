import css from "./FilterEquipment.module.css";

export default function FilterEquipment({
  features,
  setFeatures,
  transmission,
  setTransmission,
}) {
  return (
    <div className={css.wrapperCheckbox}>
      <div
        className={features.AC ? css.active : css.inactive}
        onClick={() => setFeatures({ ...features, AC: !features.AC })}>
        <svg className={css.img}>
          <use href="/src/img/sprite.svg#icon-wind"></use>
        </svg>
        <p className={css.imgDescr}>AC</p>
      </div>

      <div
        className={transmission === "automatic" ? css.active : css.inactive}
        onClick={() => setTransmission("automatic")}>
        <svg className={css.img}>
          <use href="/src/img/sprite.svg#icon-diagram"></use>
        </svg>
        <p className={css.imgDescr}>Automatic</p>
      </div>

      <div
        className={features.kitchen ? css.active : css.inactive}
        onClick={() => setFeatures({ ...features, kitchen: !features.kitchen })}>
        <svg className={css.img}>
          <use href="/src/img/sprite.svg#icon-cup-hot"></use>
        </svg>
        <p className={css.imgDescr}>Kitchen</p>
      </div>

      <div
        className={features.TV ? css.active : css.inactive}
        onClick={() => setFeatures({ ...features, TV: !features.TV })}>
        <svg className={css.img}>
          <use href="/src/img/sprite.svg#icon-tv"></use>
        </svg>
        <p className={css.imgDescr}>TV</p>
      </div>

      <div
        className={features.bathroom ? css.active : css.inactive}
        onClick={() =>
          setFeatures({ ...features, bathroom: !features.bathroom })
        }>
        <svg className={css.img}>
          <use href="/src/img/sprite.svg#icon-shower"></use>
        </svg>
        <p className={css.imgDescr}>Bathroom</p>
      </div>
    </div>
  );
}
