import React from "react";

const Navabar = () => {
  return (
    <>
      <div className="position-sticky top-0 z-2" style={{backgroundColor:"#0b033d"}}>
        <div
          className="container nav_bar"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="left nav_items">SAIRAM</div>
          <div className="right">
            <a href="#home" className="nav_items">
              Home
            </a>
            <a href="#skills" className="nav_items">
              Skills
            </a>
            <a href="#projects" className="nav_items">
              Projects
            </a>
            <a href="#contact" className="nav_items">
              Contact
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navabar;
