import React from "react";
import exportedImages from "../../constants/Images";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={exportedImages.G} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About us</h1>
        <img
          src={exportedImages.spoon}
          alt="about spoon"
          className="spoon__img"
        />
        <p className="p__opensans">
          we were founded in 1980 and have since been serving the public with
          great food. When you order from our restaraunt you get quality every
          single time.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={exportedImages.knife} alt="Knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img
          src={exportedImages.spoon}
          alt="about spoon"
          className="spoon__img"
        />
        <p className="p__opensans">
          we were founded in 1980 and have since been serving the public with
          great in house prepared food. This restraunt was started with a vision
          to strive for quality on every plate we serve.
        </p>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
