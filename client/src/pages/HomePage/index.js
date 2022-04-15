import React, { useEffect } from "react";
import { Featured, Hero } from "../../components";

import "./HomePage.scss";

export const HomePage = () => {
  return (
    <section className="home">
      <Hero />
      <Featured />
    </section>
  );
};
