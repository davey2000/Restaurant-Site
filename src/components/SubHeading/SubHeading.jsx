import React from "react";
import exportedImages from "../../constants/Images";

const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <img src={exportedImages.spoon} alt="spoon" className="spoon__img" />
    </div>
  );
};

export default SubHeading;
