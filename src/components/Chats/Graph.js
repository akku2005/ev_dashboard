import React from 'react';
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Sales overview',
      data: [500, 400, 300, 200, 100], // sales data for 2022
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
    {
      label: 'Sales overview (+5)',
      data: [505, 405, 305, 205, 105,10], // sales data for 2023 with +5 added to each month
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgba(153, 102, 255, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: true,
      position: 'top',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      display: true, // Hide y-axis ruler lines
    },
    x: {
      display: true, // Hide x-axis ruler lines
    },
  },
  maintainAspectRatio: false, 
  responsive: true, 
};

function SalesChart() {
  return <Bar data={data} options={options} style={{width: 'auto', height: '100%'}} />;
}

export default SalesChart;
