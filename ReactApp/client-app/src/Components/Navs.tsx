import React from "react";
import { Link } from "react-router-dom";

const Navs = () => {
  return (
    <div className=" fixed bg-black text-white h-14 w-screen font-semibold flex justify-between">
      <Link to="/" className="p-3">
        <h1 className="text-xl">INDIAN FOOD</h1>
      </Link>
      <div className="p-3 flex">
        <Link to="/dishlist" className="pr-4 pt-1">
          <h2>DISH LIST</h2>
        </Link>
        <Link to="/dishsuggester" className="pr-4 pt-1">
          <h2>DISH SUGGESTER</h2>
        </Link>
        <input
          placeholder="SEARCH"
          className="w-36 h-8 rounded-2xl p-2"
        ></input>
      </div>
    </div>
  );
};

export default Navs;
