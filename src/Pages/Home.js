import React from "react";
import Slider from "../components/Slider/Slider";
import CountUp from "react-countup";
import MapContainer from "../components/MapContainer";
import "./home.css";
import "./footer.css";
const Home = () => {
  return (
    <div>
      <Slider />

      <div className="numbers">
        <div className="numb">
          <CountUp className="counter" end={537} duration={3} />
          <span className="data">Totall Namalites</span>{" "}
        </div>
        <div className="numb">
          <CountUp className="counter" end={200} duration={3} />
          <span className="data">Industry </span>
        </div>
        <div className="numb">
          <CountUp className="counter" end={40} duration={3} />
          <span className="data">Education </span>
        </div>
        <div className="numb">
          <CountUp className="counter" end={40} duration={3} />
          <span className="data">Startups</span>
        </div>
      </div>

      <span className="PRESENCE">OUR PRESENCE</span>
      <div className="map">
        <MapContainer />
      </div>
      <footer>
        <div className="right">
          <img src="./IMages/logo.png" alt="" srcset="" className="flogo" />
          <div>
            {" "}
            <h2>Contact us</h2>
            <p>
              <i class="fas fa-map-marker-alt"></i> 30 km Talagang Road,
              Mianwali, 42250, Pakistan
            </p>
            <p>
              <i class="fas fa-phone"></i>
              +92(0)459-236995 Ext. 101, 107
            </p>
          </div>
        </div>

        <div className="left">
          {" "}
          <h2 style={{ color: "white" }}>Follow us</h2>
          <i class="fab fa-youtube" style={{ color: "red" }}></i>
          <i class="fab fa-twitter" style={{ color: "blue" }} />
          <i
            class="fab fa-facebook-square"
            style={{ color: "darkblue" }}
          ></i>{" "}
        </div>
      </footer>
    </div>
  );
};

export default Home;
