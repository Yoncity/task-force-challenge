import "./index.scss";
import locale from "locale";

const Header = () => {
  return (
    <div className="header_container">
      <p className="header_container__main_title">{locale.eng.header.title}</p>
      <div className="header_container__contact">
        <p>{locale.eng.header.contact}</p>
      </div>
    </div>
  );
};

export default Header;
