import "./index.scss";
import { useState, useEffect } from "react";
import down from "../../assets/icons/down.svg";
import { useRef } from "react";

const CountryWithFlag = ({
  countries,
  selectedCountry,
  setSelectedCountry,
}) => {
  const [showSelect, setShowSelect] = useState(false);

  const selectOptionAction = (country) => {
    setSelectedCountry({ name: country.name, emoji: country.emoji });
    setShowSelect(false);
  };

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target)) {
        setShowSelect(false);
      }
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const flagAndName = (country, selected, action) => {
    return (
      <div
        className="flag_and_name"
        onClick={() => action()}
        onFocus={() => !selected && setShowSelect(false)}
      >
        <span>{country.emoji}</span>
        <p>{country.name}</p>
        {selected && <img src={down} alt="Down arrow" />}
      </div>
    );
  };

  type format = {
    emoji: string;
    name: string;
  };

  const generateCountryList = () => {
    const elements: Array<format> = [];
    for (const item in countries) {
      if (
        countries[item].status !== "deleted" &&
        countries[item].status === "assigned" &&
        countries[item].emoji !== undefined &&
        elements.findIndex((i) => i.name === countries[item].name) === -1
      ) {
        elements.push({
          name: countries[item].name,
          emoji: countries[item].emoji,
        });
      }
    }

    return elements.map((item) =>
      flagAndName(item, false, () => selectOptionAction(item))
    );
  };

  return (
    <div className="country_with_flag_container" ref={ref}>
      <div className="country_with_flag_container__selected">
        {flagAndName(selectedCountry, true, () => setShowSelect(!showSelect))}
      </div>

      {showSelect && (
        <div className="country_with_flag_container__list">
          {generateCountryList()}
        </div>
      )}
    </div>
  );
};

export default CountryWithFlag;
