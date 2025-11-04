import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const SalesChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [1200, 1900, 3000, 500, 2000, 3200],
        backgroundColor: "rgba(52,147,119,0.8)",
        borderRadius: 6,
      },
    ],
  };

  return (
    <div className="bg-white shadow rounded p-6">
      <h3 className="text-lg font-bold mb-4">Monthly Sales</h3>
      <Bar data={data} />
    </div>
  );
};

export default SalesChart;
