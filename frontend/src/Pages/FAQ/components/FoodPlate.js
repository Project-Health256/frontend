import React from "react";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import { UserData } from "../../../Data/Data";
import { Chart as ChartJS } from "chart.js/auto";

export default function FoodPlate() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
          "#ff66cc",
        ],
        borderColor: "white",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div style={{ width: 500 }}>
    <Bar data={userData} />
    </div>
  );
}
