import "./index.scss";
import { useSelector } from "react-redux";
import locale from "../../locale";
import { InitialState } from "../../redux/initialState";
import Loader from "../../components/Loader";

const Details = () => {
  const { data, loading, error } = useSelector(
    (state: InitialState) => state.country
  );

  const renderData = () => {
    return (
      <>
        <div className="details_container__top">
          <div className="details_container__top__info">
            <p className="details_container__top__info__value">
              {Number(data.cases).toLocaleString()}
            </p>
            <p className="details_container__top__info__value_title">
              {locale.eng.cumulatively}
            </p>
          </div>
        </div>
        <div className="details_container__bottom">
          <div className="details_container__bottom__info">
            <div className="details_container__bottom__info__column">
              <p className="details_container__bottom__info__column__value">
                0
              </p>
              <p className="details_container__bottom__info__column__value_title">
                {locale.eng.tests}
              </p>
              <p className="details_container__bottom__info__column__total">
                {Number(data.tests).toLocaleString()}
              </p>
            </div>

            {/* <div className="details_container__bottom__info__column">
            <p className="details_container__bottom__info__column__value">
              11,270
            </p>
            <p className="details_container__bottom__info__column__value_title">
              {locale.eng.positiveCases}
            </p>
            <p className="details_container__bottom__info__column__total">
              2,188,881
            </p>
          </div> */}

            <div className="details_container__bottom__info__column">
              <p className="details_container__bottom__info__column__value">
                0
              </p>
              <p className="details_container__bottom__info__column__value_title">
                {locale.eng.hospitalized}
              </p>
              <p className="details_container__bottom__info__column__total">
                {Number(data.critical).toLocaleString()}
              </p>
            </div>

            <div className="details_container__bottom__info__column">
              <p className="details_container__bottom__info__column__value">
                {data.todayRecovered}
              </p>
              <p className="details_container__bottom__info__column__value_title">
                {locale.eng.recovered}
              </p>
              <p className="details_container__bottom__info__column__total">
                {Number(data.recovered).toLocaleString()}
              </p>
            </div>

            <div className="details_container__bottom__info__column">
              <p className="details_container__bottom__info__column__value">
                {data.todayDeaths}
              </p>
              <p className="details_container__bottom__info__column__value_title">
                {locale.eng.deaths}
              </p>
              <p className="details_container__bottom__info__column__total">
                {Number(data.deaths).toLocaleString()}
              </p>
            </div>

            {/* <div className="details_container__bottom__info__column">
            <p className="details_container__bottom__info__column__value">
              11,270
            </p>
            <p className="details_container__bottom__info__column__value_title">
              {locale.eng.vaccinated}
            </p>
            <p className="details_container__bottom__info__column__total">
              2,188,881
            </p>
          </div> */}
          </div>
        </div>
      </>
    );
  };

  const body = () => {
    if (loading) return <Loader />;
    if (error) return <p className="error">{error.message}</p>;
    if (Object.keys(data).length > 0) {
      return renderData();
    }
  };

  return <div className="details_container">{body()}</div>;
};

export default Details;
