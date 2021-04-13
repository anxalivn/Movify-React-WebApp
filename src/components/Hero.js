import React from "react";

import logo from "../assets/logo.svg";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="Movify logo" width="120" />
    <h1 className="mb-4">Movify</h1>

    <p className="lead">
      Spotify but with Movies
    </p>
  </div>
);

export default Hero;
