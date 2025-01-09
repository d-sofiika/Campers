import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import VehicleList from "../../components/VehicleList/VehicleList";
import css from "./Catalog.module.css";

import { useCatalog } from "../../redux/hooks/useCatalog";

const Catalog = () => {
 const { result, loading, error, hasMore, loadMore, handleFilterChange } =
    useCatalog();

  return (
    <div>
      <Header />
      <div className={`container ${css.catalogContainer}`}>
        <Filters onFilter={handleFilterChange} />
        
        <div className={css.vehicleContainer }>
          {loading && !result.length && <p>Loading data, please wait...</p>}
          {error && (
            <p>Whoops, something went wrong! Please try reloading this page!</p>
          )}
          {result.length > 0 && (
            <VehicleList
              items={result}
              loadMore={loadMore}
              hasMore={hasMore}
              loading={loading}
            />
          )}
          {!loading && !hasMore && result.length > 0 && (
            <p>No more data to load</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
