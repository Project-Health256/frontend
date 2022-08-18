import React from "react";
import NavBar from "../../global-components/NavBar/Navbar";
import Footer from "../../global-components/Footer/Footer";
import { Calculator } from "../../Pages/Calculator/Calculator";
import { UserProfileCard } from "./UserProfileCard";
import { useState } from "react";

export function ChartPage() {
  const windowStorageUser = window.localStorage.getItem("currUser");
  const verifiedUser = JSON.parse(windowStorageUser);
  const [selectedSession, setSelectedSession] = useState(0);
  const [userSessions, setUserSessions] = useState([]);

  return (
    <>
      <NavBar />
      <div className="flex justify-evenly mt-5">
        <div className="w-1/4">
          <UserProfileCard
            firstName={verifiedUser.firstName}
            lastName={verifiedUser.lastName}
          />
        </div>
        <div className="">
          <Calculator />
          <div className="flex w-1/3">
            <label
              for="userMetrics"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select an option
            </label>
            <select
              onChange={(e) => setSelectedSession(e.target.value)}
              id="userMetrics"
              className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected="">Choose a session</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
        </div>
      </div>
      <br></br>
      <Footer />
    </>
  );
}
