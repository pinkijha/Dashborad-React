import React from 'react';
import { LuGoal } from "react-icons/lu";
import { BiSolidDish } from "react-icons/bi";
import { MdRestaurantMenu } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const iconBaseStyles = "text-5xl m-1 rounded-full p-2";
const arrowBaseStyles = "p-4 text-white bg-gray-500 rounded-full cursor-pointer";

const iconStyles = {
  goal: `bg-red-400 text-red-800 ${iconBaseStyles}`,
  dishes: `bg-blue-400 text-blue-800 ${iconBaseStyles}`,
  menus: `bg-green-400 text-green-800 ${iconBaseStyles}`
};

const GoalsChart = () => {
  return (
    <div className='flex-col p-2 w-[500px] h-[15rem] ml-4 m-4 bg-dark-navy rounded'>
      <GoalItem
        icon={<LuGoal className={iconStyles.goal} />}
        label="Goals"
        arrowClass={arrowBaseStyles}
        arrowMargin="ml-[8rem]"
      />
      <GoalItem
        icon={<MdRestaurantMenu className={iconStyles.dishes} />}
        label="Popular Dishes"
        arrowClass={arrowBaseStyles}
        arrowMargin="ml-[4rem]"
      />
      <GoalItem
        icon={<BiSolidDish className={iconStyles.menus} />}
        label="Menus"
        arrowClass={arrowBaseStyles}
        arrowMargin="ml-[8rem]"
      />
    </div>
  )
}

const GoalItem = ({ icon, label, arrowClass, arrowMargin }) => (
  <div className='flex items-center ml-6 my-3'>
    {icon}
    <p className='m-5 text-white'>{label}</p>
    <IoIosArrowForward className={`${arrowClass} ${arrowMargin}`} style={{ color: 'white' }}  />
  </div>
);

export default GoalsChart;
