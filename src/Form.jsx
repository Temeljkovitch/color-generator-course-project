import React, { useState } from "react";

const Form = ({ addColor }) => {
  const [color, setColor] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addColor(color)
  };

  return (
    <section className="container">
      <h4>color generator</h4>
      <form action="" className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(event) => setColor(event.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(event) => setColor(event.target.value)}
          placeholder="#f15025"
        />
        <button type="submit" className="btn" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};

export default Form;
