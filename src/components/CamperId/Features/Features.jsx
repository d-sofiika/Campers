import { useContext } from "react";
import css from "./Features.module.css";
import { CamperContext } from "../../../pages/Camper/CamperContext";
import Advantages from "../../DetailsCamper/Advantages/Advantages";
import VehicleDetails from "../../DetailsCamper/VehicleDetails/VehicleDetails";

export default function Features() {
  const selectedItem = useContext(CamperContext);

  return (
    <div className={css.featuresContainer}>
      <Advantages data={selectedItem} />
      <VehicleDetails data={selectedItem} />
    </div>
  );
}
