
import { useContext } from "react";
import css from "./Features.module.css"
import { CamperContext } from "../../../pages/Camper/Camper";
import Advantages from "../../DetailsCamper/Advantages/Advantages";

export default function Features() {
  const selectedItem = useContext(CamperContext);

  return (
    <div className={css.featuresContainer}>
   <Advantages data={selectedItem}/>
    </div>
  );
}
