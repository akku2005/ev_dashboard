import React from "react";
import AdminSidebar from "../Dashboard/SideNavbar/AdminSidebar";
import TopNavbar from "../Dashboard/TopNavbar";
import { FaCreditCard, FaMobileAlt } from "react-icons/fa";
import { Bar, Line } from "react-chartjs-2";

const Payments = () => {
  // Sample data for monthly payments
  const monthlyData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Card Payments",
        backgroundColor: "rgba(54, 162, 235, 0.5)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(54, 162, 235, 0.7)",
        hoverBorderColor: "rgba(54, 162, 235, 1)",
        data: [2000, 2500, 2200, 2800, 3000, 2700, 3200],
      },
      {
        label: "UPI Payments",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 99, 132, 0.7)",
        hoverBorderColor: "rgba(255, 99, 132, 1)",
        data: [1500, 1800, 1700, 2100, 2200, 1900, 2300],
      },
    ],
  };

  const monthlyOptions = {
    responsive: true,
    indexAxis: "x",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    layout: {
      padding: {
        top: 10, 
      },
    },
    elements: {
      bar: {
        borderWidth: 1, 
        borderRadius: 12, 
        barThickness: 8,
      },
    },
  };

  // Sample data for daily and weekly payments
  const dailyData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Daily Payments",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [1200, 59, 808, 81, 56, 55, 40],
      },
      {
        label: "Weekly Payments",
        backgroundColor: "rgba(255, 159, 64, 0.5)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 3,
        hoverBackgroundColor: "rgba(255, 159, 64, 0.7)",
        hoverBorderColor: "rgba(255, 159, 64, 1)",
        data: [500, 550, 600, 650, 700, 750, 800],
      },
    ],
  };

  const dailyOptions = {
    responsive: true,
    indexAxis: "x",
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="admin-container flex">
      <AdminSidebar />
      <main className="dashboard flex flex-col flex-1">
        <div className="bar">
          <TopNavbar />
        </div>
        <section className="grid grid-cols-2 gap-6 mt-8">
          <div className="transaction">
            {/* Total Income section */}
            <div className="total-income flex items-center gap-10">
              {/* Card */}
              <div className="flex flex-col items-center bg-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl">
                <div className="bg-green-400 rounded-md p-2">
                  <FaCreditCard className="text-white text-2xl" />
                </div>
                <span className="text-md text-gray-500">Card</span>
                <span className="text-md text-gray-500">Total income</span>
                <hr className="w-full border-none bg-gray-400 rounded-full h-0.5 mt-1 mb-1" />
                <span className="font-bold text-gray-600 font-sans">₹45,504.00</span>
              </div>
              {/* UPI */}
              <div className="flex flex-col items-center bg-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl">
                <div className="bg-green-400 rounded-md p-2">
                  <FaMobileAlt className="text-white text-2xl" />
                </div>
                <span className="text-md text-gray-500">UPI</span>
                <span className="text-md text-gray-500">Total income</span>
                <hr className="w-full border-none bg-gray-400 rounded-full h-0.5 mt-1 mb-1" />
                <span className="font-bold text-gray-600 font-sans">₹45,504.00</span>
              </div>
            </div>
            {/* Other sections */}
            <div className="mt-5 bg-gray-200 p-5 rounded-3xl h-90 shadow-xl hover:shadow-2xl">
              {/* Monthly Payments Chart */}
              <h2>Monthly Payments</h2>
              <div className="text-black  mt-4">
              <Bar data={monthlyData} options={monthlyOptions} />
              </div>
              
            </div>
            {/* Daily and Weekly Payments Chart */}
            <div className="mt-5 bg-gray-200 p-5 rounded-3xl h-90 mb-5 shadow-xl hover:shadow-2xl">
              <h2>Daily and Weekly Payments</h2>
              <Line data={dailyData} options={dailyOptions} />
            </div>
          </div>
          <div className="payments-details">
            client details
          </div>
        </section>
      </main>
    </div>
  );
};

export default Payments;
