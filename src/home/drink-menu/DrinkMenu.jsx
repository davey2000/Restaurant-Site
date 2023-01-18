import React from "react";

import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/Menuitem/MenuItem";
import exportedImages from "../../constants/Images";
import exportedObject from "../../constants/Data";
import "./DrinkMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="A Drink For Every Occasion" />
      <h1 className="headtext__cormorant">Todays Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu_menu_heading">Wine and beer</p>
        <div className="app__specialMenu_menu_items">
          {exportedObject.wines.map((wine) => (
            <MenuItem
              key={wine.id}
              id={wine.id}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={exportedImages.menu} alt="menu drink image" />
      </div>

      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {exportedObject.cocktails.map((cocktail) => (
            <MenuItem
              key={cocktail.id}
              id={cocktail.id}
              title={cocktail.title}
              price={cocktail.price}
              tags={cocktail.tags}
            />
          ))}
        </div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <button type="button" className="custom__button">
          View More
        </button>
      </div>
    </div>
  </div>
);

export default SpecialMenu;
