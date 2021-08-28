import React from "react";
import "./index.scss";
import AboutMe from "../../components/AboutMe";
import Details from "../../components/Details";
import Footer from "../../components/Footer";
import ScrollableContent from "../../components/ScrollableContent";
import UserInput from "../../components/UserInput";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className="home_container">
      <Header />
      <UserInput />
      <Details />
      <ScrollableContent />
      <AboutMe />
      <Footer />
    </div>
  );
};

export default Home;
