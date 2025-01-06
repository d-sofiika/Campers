import css from "./Advantages.module.css"

export default function Advantages({ data }) {
  const advantagesNames = {
    transmission: { label: "Transmission", icon:"icon-diagram" },
    engine: { label: "Engine", icon: "icon-fuel-pump" },
    AC: { label: "Air Conditioning", icon: "icon-wind" },
    bathroom: { label: "Bathroom", icon: "icon-shower" },
    kitchen: { label: "Kitchen", icon: "icon-cup-hot" },
    TV: { label: "Television", icon: "icon-tv" },
    radio: { label: "Radio", icon: "icon-radio" },
    refrigerator: { label: "Refrigerator", icon: "icon-fridge" },
   
  };
    
  return (
    <div className={css.advantagesContainer}>
      <ul className={css.list}>
          {Object.entries(data)
          .filter(([key, value]) => value !== false && value !== undefined) 
          .map(([key, value]) => {
            const advantage = advantagesNames[key];
            if (advantage) {
              return (
                <li key={key} className={css.item}>
                  <svg width="16" height="16">
                    <use href={`/src/img/sprite.svg#${advantage.icon}`}></use>
                  </svg>
                  <span>
                    {typeof value === "boolean"
                      ? advantage.label 
                      : value} 
                  </span>
                </li>
              );
            }
            return null;
          })}
      </ul>
    </div>
  );
}
