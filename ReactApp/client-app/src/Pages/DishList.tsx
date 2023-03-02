import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DishList = () => {
  const navigate = useNavigate();
  type dishListResponse = {
    cook_time: number;
    course: string;
    diet: string;
    flavor_profile: string;
    ingredients: string;
    name: string;
  };
  const [dishList, setDishList] = useState<dishListResponse[]>();
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`/dishes`)
        .then((response) => response.json())
        .then((responsedata) => {
          setDishList(responsedata);
        });
    };
    fetchData();
  }, []);
  console.log(dishList);

  const clickHandler = (event: any) => {
    navigate("/showinfo", { state: { id: event.target.id } });
  };

  return (
    <div className="text-black bg-black w-screen text-xl p-16 flex flex-col items-center justify-center">
      {dishList?.map((dish) => {
        return (
          <button
            id={dish.name}
            className="mb-2 py-2 w-1/3 flex justify-center rounded-2xl bg-gradient-to-r from-white to-zinc-500 hover:from-zinc-500 hover:to-white"
            onClick={clickHandler}
          >
            {dish.name}
          </button>
        );
      })}
    </div>
  );
};

export default DishList;
