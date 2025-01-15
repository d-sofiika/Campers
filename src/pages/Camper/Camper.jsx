import { Link, Outlet, useLocation, useParams } from "react-router-dom";
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
import Loader from "../../components/LoaderAndError/Loader";


const Camper = () => {
  const { id } = useParams();
  const location = useLocation();
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
        <ul className={css.linkList}>
          <li>
            <Link
              className={
                location.pathname.includes("/features")
                  ? `${css.linkItem} ${css.activeLink}`
                  : css.linkItem
              }
              to="features"
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="reviews"
              className={
                location.pathname.includes("/reviews")
                  ? `${css.linkItem} ${css.activeLink}`
                  : css.linkItem
              }
            >
              Reviews
            </Link>
          </li>
        </ul>
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
