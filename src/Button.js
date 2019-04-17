import React from "react";

const Button = ({ image }) => (
  <div>
    <img src={image} alt={image} style={{ height: 300 }} />
  </div>
);

export default Button;
