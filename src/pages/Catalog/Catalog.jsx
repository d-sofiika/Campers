import { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import VehicleList from "../../components/VehicleList/VehicleList";
import css from "./Catalog.module.css";
import { fetchData } from "../../redux/campersApi";

const Catalog = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState({});

  
    const fetchCampers = async (filter) => {
    try {
      setLoading(true);
      setError(false);
      
      const data = await fetchData(filter);
      setResult(data.items || []); 
    } catch (error) {
      console.error("Error fetching campers:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

 
  useEffect(() => {
    fetchCampers(filter);
  }, [filter]);


  return (
    <div>
      <Header />
      <div className={`container ${css.catalogContainer}`}>
        <Filters onFilter={setFilter}/>
        {loading && <p>Loading data, please wait...</p>}
        {error && (
          <p>Whoops, something went wrong! Please try reloading this page!</p>
        )}
        {result.length > 0 && <VehicleList items={result} />}
      </div>
    </div>
  );
};

export default Catalog;
