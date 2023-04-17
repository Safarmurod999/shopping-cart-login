import React from "react";
import hero from "../assets/Hero.png"
import Bluebtn from "./Bluebtn";
import { Link } from "react-router-dom";
import "./Layout.scss";
function Layout() {
  return (
    <section className="home">
    <div className="container">
      <div className="home__left">
        <h1>Nisa boosts team product excellence</h1>

        <p>
          Nisa is constantly improving to move forward through dashboard,
          statistics, data and verify and superior human resources.
        </p>
        {/* <button className="Bluebtn">
          Get Started <img src={arrowright} alt="arrow" />
        </button> */}
        <Link to="/login"><Bluebtn data={"Get Started"}/></Link>
      </div>
      <div className="home__right">
        <img src={hero} alt="homeright" />
      </div>
    </div>
  </section>
  );
}

export default Layout;
