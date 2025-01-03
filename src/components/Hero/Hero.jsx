import css from "./Hero.module.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/catalog"); 
  };

  return (
    <div className={`container ${css.heroContainer}`}>
      <div className={css.wrapper}>
      <h1 className={css.title}>Campers of your dreams</h1>
      <p className={css.descr}>You can find everything you want in our catalog</p>
      <button className={css.button} type="button" onClick={handleButtonClick}>
        View Now
        </button>
        </div>
    </div>
  );
}
