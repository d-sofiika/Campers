import { useContext } from "react";
import css from "./Reviews.module.css";
import { CamperContext } from "../../../pages/Camper/CamperContext";
import RatingID from "../../DetailsCamper/RatingId/RatingId";

export default function Reviews() {
  const selectedItem = useContext(CamperContext);
  const { reviews } = selectedItem;
  return (
    <div className={css.reviewsContainer}>
      <ul className={css.reviewsList}>
        {reviews.map((person, index) => (
          <li key={index} className={css.reviewsItem}>
            <div className={css.nameRatingWrapper}>
            <div className={css.nameLetter}>
              <p>{person.reviewer_name.slice(0, 1)}</p>
            </div>
            <div className={css.wrapperName}>
              <p>{person.reviewer_name}</p>
              <RatingID rating={person.reviewer_rating}/>
            </div>
            </div>
            <p className={css.comment}>{person.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
