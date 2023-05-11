import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>오늘의 이벤트!</h1>
      <Outlet></Outlet>
    </div>
  );
};

export default About;