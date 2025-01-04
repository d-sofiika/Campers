import css from "./VehicleList.module.css"

export default function VehicleList({ items }) {
 
  return (
    <div className={`container ${css.vehicleListContainer}`}>
    
        <ul>
          {items.map(({ id, name, height }) => (
            <li key={id}>
              <p>{name}</p>
              <p>{height}</p>
            </li>
          ))}
        </ul>
      
    </div>
  );
}
