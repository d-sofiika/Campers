import { Outlet, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import css from "./Camper.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectError,
  selectLoading,
  selectSelectedItem,
} from "../../redux/selectors";
import { useEffect } from "react";
import { fetchCamperById } from "../../redux/slices/camperIdSlice";
import FormRequest from "../../components/CamperId/FormRequest/FormRequest";
import CamperDescr from "../../components/CamperId/CamperDescr/CamperDescr";
import { CamperContext } from "./CamperContext";
import Loader from "../../components/Loader/Loader";
import ListLinks from "../../components/CamperId/ListLinks/ListLinks";


const Camper = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectSelectedItem);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  if (loading) {
    return <Loader/>; 
  }
  if (error) {
    return <p>Whoops, something went wrong! Please try reloading this page!</p>; 
  }
  if (!selectedItem) {
    return <p>Camper not found.</p>; 
  }
  return (
    <>
      <Header />
      <div className={`container ${css.camperContainer}`}>
        <CamperDescr selectedItem={selectedItem} />
        <ListLinks/>
        <hr className={css.hr} />
        <div className={css.wrapperBottom}>
          <CamperContext.Provider value={selectedItem}>
            <Outlet />
          </CamperContext.Provider>
          <FormRequest />
        </div>
      </div>
    </>
  );
};

export default Camper;
