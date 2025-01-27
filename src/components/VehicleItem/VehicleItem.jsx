import { useNavigate } from "react-router-dom";
import Advantages from "../DetailsCamper/Advantages/Advantages";
import Price from "../DetailsCamper/Price/Price";
import ReviewsLocation from "../DetailsCamper/ReviewsLocation/ReviewsLocation";
import css from "./VehicleItem.module.css";



export default function VehicleItem({ detail }) {
  const navigate = useNavigate();
  const { name, price, rating, reviews, location, description, id } = detail;

  const handleButtonClick = () => {
    navigate(`/catalog/${id}`);
  };

  return (
    <div className={css.vehicleItemContainer}>
      <Price name={name} price={price} id={id} />
      <ReviewsLocation className={css.camper} rating={rating} reviews={reviews} location={location} />
      <p className={css.descr}>
        {description.length > 50
          ? `${description.slice(0, 50)}...`
          : description}
      </p>
      <Advantages data={detail} />

      <button
        className="buttonBase" 
        type="button"
        onClick={handleButtonClick}
      >
        Show more
      </button>
    </div>
  );
}
