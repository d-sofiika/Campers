import { useState } from "react";
import css from "./Filters.module.css";

export default function Filters({ onFilter }) {
  const [location, setLocation] = useState("");
  const [form, setForm] = useState("");
  const [features, setFeatures] = useState({
  AC: false,
    kitchen: false,
    TV: false,
    bathroom: false,
  });
  const [transmission, setTransmission] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
   const selectedFeatures = Object.keys(features).filter((key) => features[key]);

    const filterData = {
      location,
        transmission,
        form: form === "Fully Integrated" ? "fullyIntegrated" : form, 
    };
   selectedFeatures.forEach((feature) => {
      filterData[feature] = true; 
    });
    onFilter(filterData);
    console.log('filterData', filterData)
  };

  return (
    
    <form onSubmit={handleSubmit} className={css.form}>
      
        <p className={css.textLocation}>Location</p>
        <div className={css.inputContainer}>
          <input
            className={css.inputLocation}
            type="text"
            value={location}
            placeholder="City"
            onChange={(e) => setLocation(e.target.value)}
          />
          <svg width="20" height="20" className={css.inputIcon}>
            <use href="/src/img/sprite.svg#icon-map"></use>
          </svg>
        </div>
      
      <div className={css.wrapperFilters}>
        <p className={css.textFilters}>Filters</p>
        <h2 className={css.titleFilters}>Vehicle equipment</h2>
        <div className={css.wrapperCheckbox}>
          <div
            className={features.AC ? css.active : css.inactive}
            onClick={() => setFeatures({ ...features, AC: !features.AC })}
          >
            <svg className={css.img}>
              <use href="/src/img/sprite.svg#icon-wind"></use>
            </svg>
            <p className={css.imgDescr}>AC</p>
          </div>
          <div
              className={transmission === "automatic" ? css.active : css.inactive}
  onClick={() => setTransmission("automatic")}
          >
            <svg className={css.img}>
              <use href="/src/img/sprite.svg#icon-diagram"></use>
            </svg>
            <p className={css.imgDescr}>Automatic</p>
          </div>

          <div
            className={features.kitchen ? css.active : css.inactive}
            onClick={() =>
              setFeatures({ ...features, kitchen: !features.kitchen })
            }
          >
            <svg className={css.img}>
              <use href="/src/img/sprite.svg#icon-cup-hot"></use>
            </svg>
            <p className={css.imgDescr}>Kitchen</p>
          </div>

          <div
            className={features.TV ? css.active : css.inactive}
            onClick={() => setFeatures({ ...features, TV: !features.TV })}
          >
            <svg className={css.img}>
              <use href="/src/img/sprite.svg#icon-tv"></use>
            </svg>
            <p className={css.imgDescr}>TV</p>
          </div>

          <div
            className={features.bathroom ? css.active : css.inactive}
            onClick={() =>
              setFeatures({ ...features, bathroom: !features.bathroom })
            }
          >
            <svg className={css.img}>
              <use href="/src/img/sprite.svg#icon-shower"></use>
            </svg>
            <p className={css.imgDescr}>Bathroom</p>
          </div>
        </div>

        <div>
          <h2 className={css.titleFilters}>Vehicle type</h2>
          <div className={css.vehicleTypes}>
            <div
              className={form === "Van" ? css.active : css.inactive}
              onClick={() => setForm("Van")}
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
        </div>
      </div>
      <button className={css.btn} type="submit">
        Search
      </button>
    </form>
  );
}
