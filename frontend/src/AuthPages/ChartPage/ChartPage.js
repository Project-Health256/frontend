import React from "react";
import NavBar from "../../global-components/NavBar/Navbar";
import Footer from "../../global-components/Footer/Footer";
import { Calculator } from "../../Pages/Calculator/Calculator";
import { UserProfileCard } from "./UserProfileCard";
import { useState, useEffect } from "react";
import Chart from "./Chart";

export function ChartPage() {
  const windowStorageUser = window.localStorage.getItem("currUser");
  const verifiedUser = JSON.parse(windowStorageUser);
  const [userSessions, setUserSessions] = useState([])
  const [currentSession, setCurrentSession] = useState(5)

  const currUser = window.localStorage.getItem("currUser");
  const parsedUser = JSON.parse(currUser);


  useEffect(() => {
    const data = async () => {
      await fetch(`http://localhost:8000/user-starting-metrics/${parsedUser.id}`)
        .then(res => res.json())
        .then(data => setUserSessions(data))
    }
    data();
  }, [userSessions.length, parsedUser.id]);

  function handleSelectedSession(e) {
    const selectedSession = +e.target.value;

    if (selectedSession) {
      setCurrentSession(+e.target.value)
    }

    console.log(currentSession);
    // fetch(`http://localhost:8000/weight-entries/${currentSession}`)
    //   .then(res => res.json())
    //   .then(data => setUserWeightEntries(data))
  };

  console.log('current session', currentSession);

  return (
    <>
      <NavBar />
      <div className="flex justify-evenly mt-5">
        <div className="w-1/5">
          <UserProfileCard
            firstName={verifiedUser.firstName}
            lastName={verifiedUser.lastName}
          />
        </div>
        <div className="">
          <Calculator />
          <div className="flex w-2/5">
            <label
              for="userMetrics"
              className="block mb-2 mx-2 py-3 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              {userSessions.length === 0 && (
                <>
                  <option selected="">Currently no sessions</option>
                </>
              )}
              {userSessions.length > 0 && (
                <>
                  <option selected="">Select a Session</option>
                </>
              )}
            </label>
            <select
              onChange={handleSelectedSession}
              className="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
            >
              {userSessions.length === 0 && (
                <>
                  <option selected="">Currently no sessions</option>
                </>
              )}
              {userSessions.length > 0 && (
                <>
                  {userSessions.map((sessions) => (<option value={sessions.id}>Starting Weight: {sessions.weight}, Goal: {sessions.goal}</option>))}
                </>
              )}
            </select>
          </div>
        </div>
      </div>
      <br></br>
      <Chart session={currentSession}/>
      <Footer />
    </>
  );
}
