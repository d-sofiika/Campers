import css from "./FilterVehicle.module.css"

export default function FilterVehicle({ form, setForm }) {

  return (<div>
          <h2 className={css.titleFilters}>Vehicle type</h2>
          <div className={css.vehicleTypes}>
            <div
              className={form === "panelTruck" ? css.active : css.inactive}
              onClick={() => setForm("panelTruck")}
            >
              <svg className={css.img}>
                <use href="/src/img/sprite.svg#icon-bi_grid-1x2" />
              </svg>
              <p className={css.imgDescr}>Van</p>
            </div>
            <div
              className={
                form === "Fully Integrated" ? css.active : css.inactive
              }
              onClick={() => setForm("Fully Integrated")}
            >
              <svg className={css.img}>
                <use href="/src/img/sprite.svg#icon-bi_grid" />
              </svg>
              <p className={css.imgDescr}>Fully Integrated</p>
            </div>
            <div
              className={form === "Alcove" ? css.active : css.inactive}
              onClick={() => setForm("Alcove")}
            >
              <svg className={css.img}>
                <use href="/src/img/sprite.svg#icon-bi_grid-3x3" />
              </svg>
              <p className={css.imgDescr}>Alcove</p>
            </div>
          </div>
        </div>);
}

 