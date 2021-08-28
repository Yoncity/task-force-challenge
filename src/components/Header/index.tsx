import React from "react";
import "./index.scss";
import locale from "../../locale";

const Header = () => {
  return (
    <div className="header_container" data-testid="header-container">
      <p className="header_container__main_title" data-testid="header-left">
        {locale.eng.header.title}
      </p>
      <div className="header_container__contact">
        <p data-testid="header-right">{locale.eng.header.contact}</p>
      </div>
    </div>
  );
};

export default Header;
