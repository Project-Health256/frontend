import React, { useEffect, useState, useContext } from "react";
import { Line } from "react-chartjs-2";
import { UserData } from "../../../Data/Data";
import { Chart as ChartJS } from "chart.js/auto";

export default function Charts() {
  const [userWeightEntries, setUserWeightEntries] = useState([]);
  const user = JSON.parse(window.localStorage.getItem('currUser'))

  function renderChart(data) {
    if (!data.message) {
      setUserWeightEntries({
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
      })
    } else {
      setUserWeightEntries({
        labels: ['empty'],
        datasets: [
          {
            label: "Losing Weight",
            data: [25, 50, 100, 150, 200, 250, 300],
            backgroundColor: "#fff",
            borderColor: "red",
            borderWidth: 3,
            color: "red",
          },
        ],
      })
    }
  }

  useEffect(() => {
    fetch(`http://localhost:8000/weight-entries/${user.id}`)
      .then(res => res.json())
      .then(data => setUserWeightEntries({
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
  }, [userWeightEntries, user.id])

  const options = {
    plugins: {
      title: {
        display: true,
        text: "User's Weight Entries"
      }
    }
  }

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

    const newEntry = {
      "weight_lbs": updatedWeightEntries,
      "userStartingMetrics": user.id
    }
    fetch(`http://localhost:8000/weight-entries/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry)
    })
  }

  return (
    <div className="ml-10 p-5 w-3/4">
      <div className="p-10 bg-blueRYB-900">
      <button class="bg-transparent hover:bg-gray-500 text-white font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
  Button
</button>
      </div>
      <br />
      <br />
      <Line data={userGainData} options={options} />
      <br />
      <br />
      <form onSubmit={UpdateUserEntries}>
        <div class="w-1/2 md:w-1/3 px-3 mb-6 md:mb-0">
          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for='weight-entries'>
            Weight Entries
          </label>
          <input class="appearance-none block w-1/2 bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id='weightEntries' type="float" />
        </div>
        <button className="border-purple-500" id="btn-submit">Update Chart</button>
      </form>
    </div>
  );
}
