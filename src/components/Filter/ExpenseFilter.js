import "./ExpenseFilter.css";
import React from "react";

const ExpenseFilter = (props) => {
  // const [selectedDate, setSelectedDate] = useState('');

  const datePickerHandler = (event) => {
    props.onSelectFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={datePickerHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
