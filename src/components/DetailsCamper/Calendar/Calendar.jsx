import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const MyCalendar = () => {
  const [selected, setSelected] = useState();

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      styles={{
        caption: { color: 'var(--main)', fontSize: '18px', fontWeight: 'bold' },
        day: { padding: '8px', fontSize: '14px', borderRadius: '50%' },
        day_selected: { backgroundColor: 'var(--button)', color: '#fff' },
        day_today: { fontWeight: 'bold', border: '1px solid var(--button)' },
        nav_button: { color: 'var(--main)' },
        head_cell: { color: 'var(--gray)', fontSize: '14px' },
      }}
    />
  );
};

export default MyCalendar;
