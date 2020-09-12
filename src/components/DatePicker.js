import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import { getStatistics } from "../redux/actions";
import "react-dates/lib/css/_datepicker.css";

const DatePicker = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState({ startDate: null, endDate: null });
  const [focused, setFocused] = useState();

  const handleChange = ({ startDate, endDate }) => {
    if (startDate) setDate({ startDate });
    if (endDate) setDate({ endDate });
    if (startDate && endDate) {
      dispatch(getStatistics(startDate, endDate));
    }
  };

  return (
    <DateRangePicker
      startDate={date.startDate}
      startDateId="startDate"
      endDate={date.endDate}
      endDateId="endDate"
      onDatesChange={handleChange}
      focusedInput={focused}
      onFocusChange={(focusedInput) => setFocused(focusedInput)}
      orientation="horizontal"
      openDirection="down"
    />
  );
};

export default DatePicker;
