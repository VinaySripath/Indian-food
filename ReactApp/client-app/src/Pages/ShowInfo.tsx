import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShowInfo = () => {
  const location = useLocation();
  const name = location.state;
  console.log(name);

  type dishListResponse = {
    cook_time: number;
    course: string;
    diet: string;
    flavor_profile: string;
    ingredients: string;
    name: string;
  };
  const [dishData, setDishData] = useState<dishListResponse>();
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`/dishes/:${name.id}`)
        .then((response) => response.json())
        .then((responsedata) => {
          setDishData(responsedata);
        });
    };
    fetchData();
  }, []);
  console.log(dishData);

  return (
    <div className="text-black w-screen h-screen pt-52 pl-80">
      <div className="w-screen">
        <div className="flex flex-wrap justify-center w-1/2  rounded-3xl bg-gradient-to-r from-zinc-400 to-zinc-700 m-2">
          <div className="py-4 px-8 w-full text-center font-bold text-xl">
            Dish Name
          </div>
          <p className="py-4 px-8 rounded-3xl  bg-gradient-to-r from-white to-zinc-500 m-2">
            ingredients
          </p>
          <p className="py-4 px-8 rounded-3xl  bg-gradient-to-r from-white to-zinc-500 m-2">
            dish type
          </p>
          <p className="py-4 px-8 rounded-3xl  bg-gradient-to-r from-white to-zinc-500 m-2">
            preparation time
          </p>
          <p className="py-4 px-8 rounded-3xl  bg-gradient-to-r from-white to-zinc-500 m-2">
            cooking time
          </p>
          <p className="py-4 px-8 rounded-3xl  bg-gradient-to-r from-white to-zinc-500 m-2">
            flavor
          </p>
          <p className="py-4 px-8 rounded-3xl  bg-gradient-to-r from-white to-zinc-500 m-2">
            course
          </p>
          <p className="py-4 px-8 rounded-3xl  bg-gradient-to-r from-white to-zinc-500 m-2">
            state
          </p>
          <p className="py-4 px-8 rounded-3xl  bg-gradient-to-r from-white to-zinc-500 m-2">
            region
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShowInfo;
