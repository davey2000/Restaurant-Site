import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/Menuitem/MenuItem";
import exportedImages from "../../constants/Images";
import exportedObject from "../../constants/Data";

const FoodMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <div className="app__specialMenu-title">
        <SubHeading title="Food Prepared In House" />
        <h1 className="headtext__cormorant">Our Menu</h1>
      </div>
      <div className="app__specialMenu-menu">
        <div className="app__specialMenu-menu_wine flex__center">
          <p className="app__specialMenu_menu_heading">Entrees</p>
          <div className="app__specialMenu_menu_items">
            {exportedObject.food.map((food) => (
              <MenuItem
                key={food.id}
                id={food.id}
                title={food.title}
                price={food.price}
                tags={food.tags}
              />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={exportedImages.taco} alt="menu drink image" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className="app__specialMenu_menu_heading">Appetizers</p>
          <div className="app__specialMenu_menu_items">
            {exportedObject.appetizers.map((appetizers) => (
              <MenuItem
                key={appetizers.id}
                id={appetizers.id}
                title={appetizers.title}
                price={appetizers.price}
                tags={appetizers.tags}
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
};

export default FoodMenu;
