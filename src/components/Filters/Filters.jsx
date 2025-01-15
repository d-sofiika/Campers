import { useState } from "react";
import css from "./Filters.module.css";
import FilterLocation from "./FilterLocation/FilterLocation";
import FilterEquipment from "./FilterEquipment/FilterEquipment";
import FilterVehicle from "./FilterVehicle/FilterVehicle";

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
    const selectedFeatures = Object.keys(features).filter(
      (key) => features[key]
    );

    const filterData = {
      location,
      transmission,
      form: form === "Fully Integrated" ? "fullyIntegrated" : form,
    };
    selectedFeatures.forEach((feature) => {
      filterData[feature] = true;
    });
    onFilter(filterData);
  };

  return (
  
    <form onSubmit={handleSubmit}>
      <p className={css.textLocation}>Location</p>
      <FilterLocation location={location} setLocation={setLocation} />
      
      <div className={css.wrapperFilters}>
        <p className={css.textFilters}>Filters</p>
        <h2 className={css.titleFilters}>Vehicle equipment</h2>

        <FilterEquipment
          features={features}
          setFeatures={setFeatures}
          transmission={transmission}
          setTransmission={setTransmission}
        />

        <FilterVehicle form={form} setForm={setForm} />
      </div>

      <button className="buttonBase"  type="submit">
        Search
      </button>
    </form>
  );
}
