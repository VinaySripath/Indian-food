import React from "react";
import { Route, Routes } from "react-router-dom";
import Navs from "./Components/Navs";
import DishList from "./Pages/DishList";
import DishSuggester from "./Pages/DishSuggester";
import HomeScreen from "./Pages/HomeScreen";
import ShowInfo from "./Pages/ShowInfo";

function App() {
  return (
    <div className="bg-black h-screen w-screen">
      <Navs />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/dishlist" element={<DishList />} />
        <Route path="/dishsuggester" element={<DishSuggester />} />
        <Route path="/showinfo" element={<ShowInfo />} />
      </Routes>
    </div>
  );
}

export default App;
