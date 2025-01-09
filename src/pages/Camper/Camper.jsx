import { Link, Outlet, useParams } from "react-router-dom";
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
import ReviewsLocation from "../../components/DetailsCamper/ReviewsLocation/ReviewsLocation";
import PhotoGallery from "../../components/DetailsCamper/PhotoGallery/photoGallery";

const Camper = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectSelectedItem);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCamperById(id));
  }, [id, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!selectedItem) return <p>Camper not found.</p>;

  const { name, rating, reviews, location, price, gallery,description } = selectedItem;

  return (
    <>
      <Header />
      <div className={`container ${css.camperContainer}`}>
        <h2 className={css.name}>{name}</h2>
        <ReviewsLocation
          className={css.camper}
          underlineStyle={ {textDecoration:"underline"}}
          rating={rating}
          reviews={reviews}
          location={location}
        />
        <p className={css.price}>{`€${price}.00`}</p>
        <PhotoGallery gallery={gallery} />
        <p className={css.descr}>{description}</p>
        
        <ul className={css.linkList}>
          <li className={css.linkItem}>
            <Link to="features">Features</Link>
          </li>
          <li className={css.linkItem}>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <div>
          
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Camper;
