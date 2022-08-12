import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import { UserData } from "../../../Data/Data";
import { Chart as ChartJS } from "chart.js/auto";
import ToggleSwitch from "../../../global-components/LinkButton/ToggleSwitch";
import RoundedInputNumberForm from "../../../global-components/RoundedInputNumberForm";

export default function FoodPlate() {
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
  }, [])

  const options = {
    plugins: {
      title: {
        display: true,
        text: "User's Weight Entries"
      }
    }
  }

  console.log(user2WeightEntries)



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

  return (
    <div className="ml-10 p-5 w-3/4">
      <Line data={user2WeightEntries} options={options} />
      <br />
      <br />
      <br />
      <div className="flex justify-evenly">
        <ToggleSwitch text="Lose Weight" label="losing-weight-toggle" backgroundColor="red" />
        <RoundedInputNumberForm text="Goal Weight" id="goal-weight"/>
        <RoundedInputNumberForm text="Intial Weight" id="intial-weight"/>
        <RoundedInputNumberForm text="estimated weight loss" id="estimated-weight-loss"/>
      </div>
    </div>
  );
}
