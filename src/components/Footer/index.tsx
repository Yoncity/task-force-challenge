import "./index.scss";
import locale from "locale";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_container__top">
        <div className="footer_container__top__row">
          <p className="footer_container__top__row__header">
            {locale.eng.footer.reachMe}
          </p>
        </div>

        <div className="footer_container__top__row">
          <p className="footer_container__top__row__title">
            {locale.eng.email}
          </p>
          <p className="footer_container__top__row__data">
            yonatan.dawit.dev@gmail.com
          </p>
        </div>

        <div className="footer_container__top__row">
          <p className="footer_container__top__row__title">
            {locale.eng.phone}
          </p>
          <p className="footer_container__top__row__data">+256 785 323 292</p>
        </div>

        <div className="footer_container__top__row">
          <p className="footer_container__top__row__title">
            {locale.eng.footer.profile}
          </p>
          <a
            href="https://github.com/Yoncity"
            className="footer_container__top__row__data"
          >
            Click here to see my profile
          </a>
        </div>
      </div>

      <div className="footer_container__bottom">
        <div className="footer_container__bottom__info">
          <p className="footer_container__bottom__info__title">
            {locale.eng.footer.develpedBy}
          </p>
          <p className="footer_container__bottom__info__data">
            Yonatan @Yoncity
          </p>
        </div>

        <div className="footer_container__bottom__info">
          <p className="footer_container__bottom__info__title">DesignedBy</p>
          <p className="footer_container__bottom__info__data">Awesomity Lab</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
