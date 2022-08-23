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
  const [userSessions, setUserSessions] = useState([]);
  const [currentSession, setCurrentSession] = useState();
  const [userWeightEntries, setUserWeightEntries] = useState([]);
  const currUser = window.localStorage.getItem("currUser");
  const parsedUser = JSON.parse(currUser);

  const data = async () => {
    await fetch(
      `https://provident-life.herokuapp.com/user-starting-metrics/${parsedUser.id}`
    )
      .then((res) => res.json())
      .then((data) => setUserSessions(data));
  };
  
  useEffect(() => {
    data();
  }, [userSessions.length]);

  async function getSession(session) {
    const weightData = await fetch(
      `https://provident-life.herokuapp.com/weight-entries/${session}`
    )
      .then((res) => res.json())
      .then((data) => setUserWeightEntries(data.allWeightEntries));
  }

  async function handleSelectedSession(e) {
    const selectedSession = +e.target.value;
    setCurrentSession(selectedSession);
    if (selectedSession === 0) return;

    await getSession(selectedSession);
  };

  async function submitNewWeight(e) {
    e.preventDefault();
    const newEntry = +e.target.weightEntry.value;
    const entryData = {
      weight_lbs: newEntry,
      userStartingMetrics: currentSession
    };

    const postNewWeight = await fetch('https://provident-life.herokuapp.com/weight-entries', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryData),
    })

    await getSession(currentSession);
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center mt-5">
        <div className="">
          <Calculator userSessions={userSessions} getData={data}/>
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
                  <option selected value="0">
                    None
                  </option>
                  {userSessions.map((sessions) => (
                    <option value={sessions.id}>
                      Starting Weight: {sessions.weight}, Goal:{" "}
                      {sessions.goal > 0 ? "+" : null}
                      {sessions.goal}%
                    </option>
                  ))}
                </>
              )}
            </select>
          </div>
          {currentSession > 0 && (
            <Chart chartWeightEntries={userWeightEntries} />
          )}
          {currentSession > 0 && (
            <>
              <form className="mt-6 flex" onSubmit={submitNewWeight}>
                <div class="relative z-0 mb-6 w-full group w-1/3 p-6 min-w-sm mb-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center">
                  <input
                    type="number"
                    name="weightEntry"
                    class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                    required
                  />
                  <label
                    for="floating_email"
                    class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-65 top-1 -z-5 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Weight (lbs)
                  </label>
                  <button type="submit" class="text-white mt-3 bg-[#7066e0] hover:bg-[#655cc9] focus:ring-4 focus:outline-none focus:ring-[#b7b2ef] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-[#7066e0] dark:hover:bg-[#655cc9] dark:focus:ring-[#b7b2ef]">Submit</button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
