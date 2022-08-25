import { AiFillPieChart, AiFillSliders, AiFillThunderbolt, AiFillWarning, AiOutlineUser } from "react-icons/ai";
import { Link } from 'react-router-dom';
import NavBar from "../../global-components/NavBar/Navbar";



export default function FAQ() {
  return (
    <>
      <NavBar />
      <div className="grid grid-cols-5 mt-4 ">
        {/* Food Plate */}
        <div className="ml-3 p-5 w-min p-6 min-w-sm mb-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <Link to="foodplate">
            <AiFillPieChart className="text-[5rem] pt-2 pl-2 hover:text-sunray-500" />
            <figcaption className="text-center LI-UI">Food Plate</figcaption>
          </Link>
        </div>
        <div className="ml-3 p-5 w-min p-6 min-w-sm mb-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          {/* Effective Workouts */}
          <Link to="foodplate">
            <AiFillSliders className="text-[5rem] pt-2 pl-2 hover:text-sunray-500" />
            <figcaption className="text-center LI-UI">Effective Workouts</figcaption>
          </Link>
        </div>
        <div className="ml-3 p-5 w-min p-6 min-w-sm mb-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          {/* Calories  */}
          <Link to="foodplate">
            <AiFillThunderbolt className="text-[5rem] pt-2 pl-2 hover:text-sunray-500" />
            <figcaption className="text-center LI-UI">Calories</figcaption>
          </Link>
        </div>
        <div className="ml-3 p-5 w-min p-6 min-w-sm mb-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          {/* Avoidance */}
          <Link to="foodplate">
            <AiFillWarning className="text-[5rem] pt-2 pl-2 hover:text-sunray-500" />
            <figcaption className="text-center LI-UI">Avoidance</figcaption>
          </Link>
        </div>
        <div className="ml-3 p-5 w-min p-6 min-w-sm mb-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          {/* User Account */}
          <Link to="foodplate">
            <AiOutlineUser className="text-[5rem] pt-2 pl-2 hover:text-sunray-500" />
            <figcaption className="text-center LI-UI">User Account</figcaption>
          </Link>
        </div>
      </div>;
    </>
  )
}
