import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';
import _ from 'country-data';
import locale from '../../locale';
import CountryPicker from '../../components/CountryPicker';
import DatePicker from '../../components/DatePicker';
import getCountry from '../../redux/actions/country';
import { InitialState } from '../../redux/initialState';

const CountryAndDateInput = () => {
  const { loading } = useSelector((state: InitialState) => state.country);
  const countries = _.countries;
  const [selectedCountry, setSelectedCountry] = useState({
    name: countries.RW.name,
    emoji: countries.RW.emoji,
  });

  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const dispatch = useDispatch();

  const makeRequest = () => {
    dispatch(getCountry(selectedCountry.name));
  };

  const handleChange = (e) => {
    setShowDatePicker(!showDatePicker);
    setDate(e);
  };

  return (
    <div className="main_container">
      <div className="main_container__title">
        <p>{locale.eng.countryAndDateInput.updates}</p>
      </div>

      <div className="main_container__sub_title">
        <p>{locale.eng.countryAndDateInput.hint}</p>
      </div>

      <div className="main_container__inputs">
        <CountryPicker
          countries={countries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
        />
        <DatePicker
          date={date}
          showDatePicker={showDatePicker}
          setShowDatePicker={setShowDatePicker}
          handleChange={handleChange}
        />
        <input
          type="submit"
          value={locale.eng.submit}
          className="main_container__inputs__submit"
          onClick={makeRequest}
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default CountryAndDateInput;
