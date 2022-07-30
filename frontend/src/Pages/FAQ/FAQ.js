import React from 'react';
import { AiFillPieChart, AiFillSliders, AiFillThunderbolt, AiFillWarning, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { LinkButton } from '../../components/LinkButton/Link-Button';



export default function FAQ() {
  return (
    <div>
      <LinkButton pathName="/signup" text="Sign Up" />
      <div className="grid grid-cols-5">
        {/* Food Plate */}
        <div className="ml-5 p-5 w-min">
          <Link to="foodplate">
            <AiFillPieChart className="text-[5rem] pt-2 pl-2" />
            <figcaption className="text-center">Food Plate</figcaption>
          </Link>
          </div>
          <div className="grid grid-cols-5">
          {/* Effective Workouts */}
          <Link to="foodplate">
            <AiFillSliders className="text-[5rem] pt-2 pl-2" />
            <figcaption className="text-center">Effective Workouts</figcaption>
          </Link>
          </div>
          <div className="grid grid-cols-5">
          {/* Calories  */}
          <Link to="foodplate">
            <AiFillThunderbolt className="text-[5rem] pt-2 pl-2" />
            <figcaption className="text-center">Calories</figcaption>
          </Link>
          </div>
          <div className="grid grid-cols-5">
          {/* Avoidance */}
          <Link to="foodplate">
            <AiFillWarning className="text-[5rem] pt-2 pl-2" />
            <figcaption className="text-center">Avoidance</figcaption>
          </Link>
          </div>
          <div className="grid grid-cols-5">
          {/* User Account */}
          <Link to="foodplate">
            <AiOutlineUser className="text-[5rem] pt-2 pl-2" />
            <figcaption className="text-center">User Account</figcaption>
          </Link>
          </div>
        </div>;
      </div>
  )
}
