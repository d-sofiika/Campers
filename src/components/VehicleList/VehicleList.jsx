import VehicleItem from "../VehicleItem/VehicleItem";
import css from "./VehicleList.module.css";

export default function VehicleList({ items }) {
  return (
    <div className={css.vehicleListContainer}>
      <ul className={css.list}>
        {items.map((detail) => (
          <li key={detail.id} className={css.item}>
            <img
              src={detail.gallery[0]?.thumb}
              alt="camper"
              className={css.img}
            />
            <VehicleItem detail={detail} />
          </li>
        ))}
      </ul>
    </div>
  );
}
