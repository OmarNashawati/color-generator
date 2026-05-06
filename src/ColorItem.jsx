import React from "react";

const ColorItem = ({ hex, weight, type }) => {
  const hexCode = `#${hex}`;
  return (
    <div className={`color-item ${type}`} style={{ background: hexCode }}>
      <p>{hexCode}</p>
      <p>{weight}%</p>
    </div>
  );
};

export default ColorItem;
