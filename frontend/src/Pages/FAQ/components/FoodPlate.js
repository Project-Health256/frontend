import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { useState } from "react";
import { UserData } from "../../../Data/Data";
import { Chart as ChartJS } from "chart.js/auto";

export default function FoodPlate() {
  const [userGainData, setUserGainData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "#fff"
        ],
        borderColor: "black",
        borderWidth: 3,
      },
      {
        label: "User Lost",
        data: UserData.map(data => data.userLost),
        backgroundColor: [
          "#000"
        ],
        borderColor: "white",
        borderWidth: 3,
      }
    ],
  });

  // const [userLostData, setUserLostData] = useState({
  //   labels: UserData.map(data => data.year),
  //   datasets: [
  //     {
  //       label: "User Lost",
  //       data: UserData.map(data => data.userLost),
  //       backgroundColor: [
  //         "#000"
  //       ],
  //       borderColor: "white",
  //       borderWidth: 2
  //     }
  //   ]
  // })

  return (
    <div className="ml-10 p-5 w-3/4 flex justify-between">
    <Line data={userGainData} />
    {/* <Bar data={userLostData} /> */}
    </div>
  );
}
