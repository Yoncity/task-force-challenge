import "./index.scss";
import ME from "../../assets/images/ME.jpg";
import Months from "../../constants/months";

const AboutMe = () => {
  const date = new Date();
  const day = date.getDay() >= 10 ? date.getDay() : "0" + date.getDay();
  const month = Months[date.getMonth()];
  const year = date.getFullYear();

  return (
    <div className="about_me_container">
      <div className="about_me_container__left">
        <img src={ME} alt="Portrait of Yonatan Dawit" />
      </div>

      <div className="about_me_container__right">
        <p className="about_me_container__right__name">YONATAN DAWIT</p>
        <p className="about_me_container__right__skill">Software Developer</p>
        <p className="about_me_container__right__date">{`${day} ${month} ${year}`}</p>
      </div>
    </div>
  );
};

export default AboutMe;
