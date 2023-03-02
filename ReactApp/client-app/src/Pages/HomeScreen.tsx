import React from "react";
import image from "../Images/indian_food_homepage.jpg";

const HomeScreen = () => {
  return (
    <div
      className="h-screen w-screen bg-cover font-bold p-44 text-zinc-100 text-5xl"
      style={{ backgroundImage: `url("${image}")` }}
    >
      <p className="pb-8">Explore</p> <p className="pb-8">The</p>
      <p className="pb-8">Taste Of</p> <p className="pb-8">India</p>
    </div>
  );
};

export default HomeScreen;
