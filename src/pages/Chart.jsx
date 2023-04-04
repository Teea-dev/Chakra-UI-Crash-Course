import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [36.7, 36.7, 36.7, 36.7, 36.7],
      backgroundColor: [
        " #FF8B00",
        " #0019F8",
        "#D00BF0",
       "#FFFFFF",
        "#00B6FF",
        "rgba(255, 159, 64, 0.2)",
      ],
      
    
    },
  ],
};

const options = {
  responsive: true,
  cutout: 80,
};

export default function DoughnutChart() {
  return <Doughnut data={data} options={options} />;
}
