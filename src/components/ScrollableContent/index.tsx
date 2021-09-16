import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './index.scss';
import locale from '../../locale';
import getContinents from '../../redux/actions/continents';
import { ContinentState } from '../../redux/initialState';
import Loader from '../../components/Loader';
import arrow from '../../assets/icons/arrow.svg';

const ScrollableContent = () => {
  const { loading, error, data } = useSelector(
    (state: ContinentState) => state.continents,
  );

  const [current, setCurrent] = useState(0);
  console.log('🚀 --- ScrollableContent --- current', current);

  const activeContinent = useRef(null);

  const nextContent = () => {
    setCurrent(current === data.length - 1 ? current : current + 1);
    // @ts-ignore
    activeContinent.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  const prevContent = () => {
    setCurrent(current === 0 ? current : current - 1);
    // @ts-ignore
    activeContinent.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContinents());
  }, [dispatch]);

  const renderContinents = () => {
    return data.map((item, index) => (
      <div
        className={`scrollable_content_container__continents_container__slider__continent`}
        ref={index === current ? activeContinent : null}
      >
        <div className="scrollable_content_container__continents_container__slider__continent__left">
          <p className="scrollable_content_container__continents_container__slider__continent__left__title">
            {item.continent}
          </p>
          <div className="scrollable_content_container__continents_container__slider__continent__left__cases">
            <p className="scrollable_content_container__continents_container__slider__continent__left__cases__value">
              {Number(item.todayCases).toLocaleString()}
            </p>
            <p className="scrollable_content_container__continents_container__slider__continent__left__cases__new_cases">
              New Cases
            </p>
          </div>
          <p className="scrollable_content_container__continents_container__slider__continent__left__total">
            All Cases: {Number(item.cases).toLocaleString()}
          </p>
        </div>

        <div className="scrollable_content_container__continents_container__slider__continent__right">
          <div className="scrollable_content_container__continents_container__slider__continent__right__content">
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__value">
              {Number(item.todayDeaths).toLocaleString()}
            </p>
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__value_title">
              New deaths
            </p>
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__total">
              Total Deaths: {Number(item.deaths).toLocaleString()}
            </p>
          </div>

          <div className="scrollable_content_container__continents_container__slider__continent__right__content">
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__value">
              {Number(item.todayRecovered).toLocaleString()}
            </p>
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__value_title">
              Newly recovered
            </p>
            <p className="scrollable_content_container__continents_container__slider__continent__right__content__total">
              Total Deaths: {Number(item.recovered).toLocaleString()}
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
          <div className="scrollable_content_container__continents_container__button">
            <img
              className={`scrollable_content_container__continents_container__button__left_arrow ${
                current === 0 ? 'last_continent' : ''
              }`}
              src={arrow}
              alt="Left arrow"
              onClick={prevContent}
            />
          </div>

          <div className="scrollable_content_container__continents_container__button">
            <img
              className={`scrollable_content_container__continents_container__button__right_arrow ${
                current === data.length - 1 ? 'last_continent' : ''
              }`}
              src={arrow}
              alt="Right arrow"
              onClick={nextContent}
            />
          </div>
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
