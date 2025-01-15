import ReviewsLocation from "../../DetailsCamper/ReviewsLocation/ReviewsLocation";
import PhotoGallery from "../../DetailsCamper/PhotoGallery/PhotoGallery.jsx";
import css from "./CamperDescr.module.css";

export default function CamperDescr({ selectedItem }) {
    
  const { name, rating, reviews, location, price, gallery, description } =
        selectedItem;
    
  return (
    <div>
      <h2 className={css.name}>{name}</h2>
      <ReviewsLocation
        className={css.camper}
        underlineStyle={{ textDecoration: "underline" }}
        rating={rating}
        reviews={reviews}
        location={location}
      />
      <p className={css.price}>{`€${price}.00`}</p>
      <PhotoGallery gallery={gallery} />
      <p className={css.descr}>{description}</p>
    </div>
  );
}
