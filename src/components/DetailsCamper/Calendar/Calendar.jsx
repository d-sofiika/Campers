import { useEffect, useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/flatpickr.css";
import css from "./Calendar.module.css";

export default function Calendar({ selectedDate, onDateChange }) {
  const [date, setDate] = useState(selectedDate);

  useEffect(() => {
    setDate(selectedDate);
  }, [selectedDate]);

  const handleDateChange = (selectedDates) => {
    setDate(selectedDates[0]);
    onDateChange && onDateChange(selectedDates[0]);
  };

  return (
    
      <Flatpickr
        value={date}
        onChange={handleDateChange}
        options={{
          dateFormat: "F j, Y",
          locale: "en",
          monthSelectorType: "static",
          disableMobile: true,
        }}
        placeholder="Booking date*"
        className={css.input}
      />
 
  );
}
