import React from "react";
const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
          <br />
          <br />      
      <h1>{title}</h1>
      <div />
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default Banner;
