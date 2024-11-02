import React from "react";
import HeroSection from "./Hero";
import FeatureSection from "./Features";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection className="mt-8" />
    </div>
  );
};

export default Home;
