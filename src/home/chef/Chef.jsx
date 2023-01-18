import React from "react";
import exportedImages from "../../constants/Images";
import SubHeading from "../../components/SubHeading/SubHeading";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={exportedImages.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chefs Word" />
      <h1 className="headtext__cormorant">What we Believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={exportedImages.quote} alt="chefs quote" />
          <p className="p__opensans">
            Our food is freshly prepared in house with fresh ingredients.
          </p>
        </div>
        <p className="p__opensans">
          This has been my goal since becoming a chef at this restaraunt and we
          maintain this goal daily. At our restaraunt not only do we offer fresh
          food prepared in house we also offer fresh unique drinks.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Dave Shea - Founder</p>
        <p className="p__opensans"></p>
        <img src={exportedImages.sign} alt="Chefs signature" />
        <p className="p__opensans">- Head Chef</p>
      </div>
    </div>
  </div>
);

export default Chef;
