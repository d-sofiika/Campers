
import VehicleItem from "../VehicleItem/VehicleItem";

import css from "./VehicleList.module.css";


export default function VehicleList({ items, loadMore, hasMore, loading }) {
    
  return (
    <div className={css.vehicleListContainer}>
      <ul className={css.list}>
        {items.map((detail, index) => (
          <li key={`${detail.someField}-${index}`} className={css.item}>
            <img
              src={detail.gallery[0]?.thumb}
              alt="camper"
              className={css.img}
            />
            <VehicleItem detail={detail} />
          </li>
        ))}
      </ul>
      <div className={css.wrapperLoadMore}>
        {loading && <button className={css.loadMoreBtn}>
          Loading...
        </button>} 
      {!loading && hasMore && (
        <button onClick={loadMore} className={css.loadMoreBtn}>
          Load More
        </button>
      )}</div>
    </div>
  );
}
