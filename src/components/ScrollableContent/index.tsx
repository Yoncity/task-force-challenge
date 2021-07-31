import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.scss";
import locale from "locale";
import getContinents from "redux/actions/continents";
import { ContinentState } from "redux/initialState";
import Loader from "components/Loader";

const ScrollableContent = () => {
  const { loading, error, data } = useSelector(
    (state: ContinentState) => state.continents
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, [dispatch]);

  const renderContinents = () => {
    return data.map((item) => (
      <div className="scrollable_content_container__continents_container__slider__continent">
        <div className="scrollable_content_container__continents_container__slider__continent__left">
          <p className="scrollable_content_container__continents_container__slider__continent__left__title">
            {item.continent}
          </p>
          <div className="scrollable_content_container__continents_container__slider__continent__left__cases">
            <p className="scrollable_content_container__continents_container__slider__continent__left__cases__value">
              {item.todayCases}
            </p>
            <p className="scrollable_content_container__continents_container__slider__continent__left__cases__new_cases">
              New Cases
            </p>
          </div>
          <p className="scrollable_content_container__continents_container__slider__continent__left__total">
            All Cases: {item.cases}
          </p>
        </div>

        <div className="scrollable_content_container__continents_container__slider__continent__right">
          <div className="scrollable_content_container__continents_container__slider__continent__right__content">
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__value">
              {item.todayDeaths}
            </p>
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__value_title">
              New deaths
            </p>
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__total">
              Total Deaths: {item.deaths}
            </p>
          </div>

          <div className="scrollable_content_container__continents_container__slider__continent__right__content">
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__value">
              {item.todayRecovered}
            </p>
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__value_title">
              Newly recovered
            </p>
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__total">
              Total Deaths: {item.recovered}
            </p>
          </div>

          <div className="scrollable_content_container__continents_container__slider__continent__right__content">
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__value">
              1,878,564
            </p>
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__value_title">
              New vaccinated
            </p>
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__total">
              Total vaccinated: 14,784,245
            </p>
          </div>
        </div>
      </div>
    ));
  };

  const body = () => {
    if (loading)
      return (
        <div className="scrollable_content_container__continents_container">
          <Loader />
        </div>
      );
    if (error) return <p className="error">{error.message}</p>;
    if (data.length > 0)
      return (
        <div className="scrollable_content_container__continents_container">
          <div className="scrollable_content_container__continents_container__slider">
            {data && renderContinents()}
          </div>
        </div>
      );
  };

  return (
    <div className="scrollable_content_container">
      <p className="scrollable_content_container__title">
        {locale.eng.perContinents}
      </p>
      {body()}
    </div>
  );
};

export default ScrollableContent;
