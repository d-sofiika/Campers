import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import VehicleList from "../../components/VehicleList/VehicleList";
import css from "./Catalog.module.css"

const Catalog = () => {
   const handleFilter = (filters) => {
    console.log("Filters applied:", filters);
  };
  return (
    <div >
      <Header />
      <div className={`container ${css.catalogContainer}`}>
      <Filters onFilter={handleFilter}/>
      <VehicleList />
      </div>
        </div>
  );
};

export default Catalog;