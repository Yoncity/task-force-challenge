import React from "react";
import { useEffect } from "react";
import "./index.scss";
import moment from "moment";
import DatePicker from "react-datepicker";
import calendar from "../../assets/icons/calendar.svg";
import { useRef } from "react";

const _DatePicker = ({
  date,
  showDatePicker,
  setShowDatePicker,
  handleChange,
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        setShowDatePicker(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, setShowDatePicker]);

  return (
    <div className="main_container__inputs__date" ref={ref}>
      <p
        className="main_container__inputs__date__display"
        onClick={() => setShowDatePicker(!showDatePicker)}
      >
        {moment(date).format("DD MMM YYYY")}
      </p>
      <img
        src={calendar}
        alt="Calendar icon"
        onClick={() => setShowDatePicker(!showDatePicker)}
      />
      <div className="main_container__inputs__date__picker">
        {showDatePicker && (
          <DatePicker selected={date} onChange={handleChange} inline />
        )}
      </div>
    </div>
  );
};

export default _DatePicker;
