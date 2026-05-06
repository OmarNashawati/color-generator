import React from "react";

const App = () => {
  return (
    <main>
      <header>
        <h1>Color Generator</h1>
        <form>
          <input type="color" />
          <input type="text" placeholder="#FFFFFF" />
          <button className="btn">Generate</button>
        </form>
      </header>
      <section>colors</section>
    </main>
  );
};

export default App;
