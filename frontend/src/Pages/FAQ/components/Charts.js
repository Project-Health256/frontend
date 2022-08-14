import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { UserData } from "../../../Data/Data";
import { Chart as ChartJS } from "chart.js/auto";
import ToggleSwitch from "../../../global-components/LinkButton/ToggleSwitch";
import RoundedInputNumberForm from "../../../global-components/RoundedInputNumberForm";

export default function Charts() {
  const [user2WeightEntries, setUser2WeightEntries] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/weight-entries/2`)
      .then(res => res.json())
      .then(data => setUser2WeightEntries({
        labels: data.map(data => data.created_at),
        datasets: [
          {
            label: "Losing Weight",
            data: data.map(data => data.weight_lbs),
            backgroundColor: "#fff",
            borderColor: "red",
            borderWidth: 3,
            color: "red",
          },
        ],
      }))
  }, [user2WeightEntries])

  const options = {
    plugins: {
      title: {
        display: true,
        text: "User's Weight Entries"
      }
    }
  }

  console.log(user2WeightEntries)


// Data used to reset chart's in case charts no longer appear
  const [userGainData, setUserGainData] = useState({
    labels: UserData.map((data) => data.id),
    datasets: [
      {
        label: `Week`,
        data: UserData.map((data) => data.weeks),
        backgroundColor: [
          "#fff"
        ],
        borderColor: "black",
        borderWidth: 3,
        color: "black",
      },
    ],
  });

  function UpdateUserEntries(event) {
    event.preventDefault();

    const updatedWeightEntries = Number(event.target.weightEntries.value);
    // console.log(updatedWeightEntries)
    const newEntry = {
      "weight_lbs" : updatedWeightEntries,
      "userStartingMetrics" : 2
    }
    fetch(`http://localhost:8000/weight-entries/`, {
      method : "POST",
      headers: { "Content-Type" : "application/json" },
      body: JSON.stringify(newEntry)
    })
  }

  return (
    <div className="ml-10 p-5 w-3/4">
      <Line data={user2WeightEntries} options={options} />
      <br />
      <br />
      <br />
    <form onSubmit={UpdateUserEntries}>
    <div class="w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='weight-entries'>
                Weight Entries
            </label>
            <input class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id='weightEntries' type="float"  />
        </div>
        <button className="border-purple-500" id="btn-submit">Update Chart</button>
    </form>
    </div>
  );
}
