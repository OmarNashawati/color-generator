import React, { useEffect, useState } from "react";

const ColorItem = ({ hex, weight, type }) => {
  const hexCode = `#${hex}`;
  const [isCopied, setIsCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(hexCode);
    setIsCopied(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsCopied(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <div
      className={`color-item ${type}`}
      style={{ background: hexCode }}
      onClick={copy}
    >
      <p>{hexCode}</p>
      <p>{weight}%</p>
      {type === "base" && <p className="tag">Base Color</p>}
      {isCopied && <p className="alert">Color coied to clipboard</p>}
    </div>
  );
};

export default ColorItem;
