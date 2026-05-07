import React, { useState } from "react";
import Values from "values.js";
import ColorItem from "./ColorItem";

const App = () => {
  const [color, setColor] = useState("");
  const [error, setError] = useState(null);
  const [colors, setColors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    try {
      const colorsList = new Values(color).all(10);
      setColors(colorsList);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <main>
      <header>
        <h1>Color Generator</h1>
        <form onSubmit={handleSubmit}>
          <input type="color" onChange={(e) => setColor(e.target.value)} />
          <input
            type="text"
            placeholder="#FFFFFF"
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="btn" type="submit">
            Generate
          </button>
        </form>
      </header>

      {error && (
        <div>
          <p className="error">{error.message}</p>
          <h3>Supports</h3>
          <ul>
            <li>Hexadecimal RGB value: #RGB #RRGGBB</li>
            <li>#RGBA #RRGGBBAA (4 and 8-digit hexadecimal RGBA notation)</li>

            <li>
              HSL/A - CSS Color Module Level 3 and 4 (number, deg, rad, turn)
            </li>
            <li>RGB/A - CSS Color Module Level 3 and 4 (number, percentage)</li>
          </ul>
        </div>
      )}
      {!error && (
        <section className="colors-container">
          {colors.map((color, index) => {
            return (
              <ColorItem
                key={index}
                hex={color.hex}
                weight={color.weight}
                type={color.type}
              />
            );
          })}
        </section>
      )}
    </main>
  );
};

export default App;
