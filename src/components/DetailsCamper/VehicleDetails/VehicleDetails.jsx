import css from "./VehicleDetails.module.css";

export default function VehicleDetails({ data }) {
  const { form, length, width, height, tank, consumption } = data;
  return (
    <div className={css.vehicleDetailsContainer}>
      <h3 className={css.title}>Vehicle details</h3>
      <hr className={css.hr} />
      <div className={css.wrapperAllDetails}>
        <div className={css.details}>
          <p className={css.dataDetails}>Form</p>
          <p className={css.dataDetails}>{form}</p>
        </div>
        <div className={css.details}>
          <p className={css.dataDetails}>Length</p>
          <p className={css.dataDetails}>{length}</p>
        </div>
        <div className={css.details}>
          <p className={css.dataDetails}>Width</p>
          <p className={css.dataDetails}>{width}</p>
        </div>
        <div className={css.details}>
          <p className={css.dataDetails}>Height</p>
          <p className={css.dataDetails}>{height}</p>
        </div>
        <div className={css.details}>
          <p className={css.dataDetails}>Tank</p>
          <p className={css.dataDetails}>{tank}</p>
        </div>
        <div className={css.details}>
          <p className={css.dataDetails}>Consumption</p>
          <p className={css.dataDetails}>{consumption}</p>
        </div>
      </div>
    </div>
  );
}
