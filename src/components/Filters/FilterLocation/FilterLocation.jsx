import css from "./FilterLocation.module.css"

export default function FilterLocation({ setLocation, location}) {
  
  return (<div className={css.inputContainer}>
          <input
            className={css.inputLocation}
            type="text"
            value={location}
            placeholder="City"
            onChange={(e) => setLocation(e.target.value)}
          />
          <svg width="20" height="20" className={css.inputIcon}>
            <use href="/sprite.svg#icon-map"></use>
          </svg>
        </div>);
}
