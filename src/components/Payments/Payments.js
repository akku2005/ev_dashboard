import React, { useState } from "react";
import AdminSidebar from "../Dashboard/SideNavbar/AdminSidebar";
import TopNavbar from "../Dashboard/TopNavbar";
import { FaCreditCard, FaMobileAlt } from "react-icons/fa";
import { Bar, Line } from "react-chartjs-2";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Invoice from "../UserDetails/Invoice"; // Import your Invoice component
import jsonData from "../../data/paymentData.json"; // Import your JSON data

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
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
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

  // State to store selected client details
  const [selectedClient, setSelectedClient] = useState(null);

  // Function to handle clicking the details button
  const handleDetailsClick = (client) => {
    setSelectedClient(client);
  };

  // Function to handle clicking the close button on the details modal
  const handleCloseClick = () => {
    setSelectedClient(null);
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
                <span className="font-bold text-gray-600 font-sans">
                  ₹45,504.00
                </span>
              </div>
              {/* UPI */}
              <div className="flex flex-col items-center bg-gray-200 p-8 rounded-2xl shadow-xl hover:shadow-2xl">
                <div className="bg-green-400 rounded-md p-2">
                  <FaMobileAlt className="text-white text-2xl" />
                </div>
                <span className="text-md text-gray-500">UPI</span>
                <span className="text-md text-gray-500">Total income</span>
                <hr className="w-full border-none bg-gray-400 rounded-full h-0.5 mt-1 mb-1" />
                <span className="font-bold text-gray-600 font-sans">
                  ₹45,504.00
                </span>
              </div>
            </div>
            {/* Other sections */}
            <div className="mt-5 bg-gray-200 p-5 rounded-3xl h-90 shadow-xl hover:shadow-2xl">
              {/* Monthly Payments Chart */}
              <h2>Monthly Payments</h2>
              <div className="text-black mt-4">
                <Bar data={monthlyData} options={monthlyOptions} />
              </div>
            </div>
            {/* Daily and Weekly Payments Chart */}
            <div className="mt-5 bg-gray-200 p-5 rounded-3xl h-90 mb-5 shadow-xl hover:shadow-2xl">
              <h2>Daily and Weekly Payments</h2>
              <Line data={dailyData} options={dailyOptions} />
            </div>
          </div>
          <div className="payments-details mr-5 h-auto mb-5">
            <h2 className="text-lg font-semibold mb-4">Payment Details</h2>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full border border-green-800">
                <thead>
                  <tr className="bg-green-500 text-white">
                    <th className="border border-green-600 px-4 py-2">
                      Sr. No
                    </th>
                    <th className="border border-green-600 px-4 py-2">
                      Vehicle No
                    </th>
                    <th className="border border-green-600 px-4 py-2">
                      Customer Name
                    </th>
                    <th className="border border-green-600 px-4 py-2">
                      Payment Type
                    </th>
                    <th className="border border-green-600 px-4 py-2">
                      Invoice
                    </th>
                    <th className="border border-green-600 px-4 py-2">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {jsonData.map((client, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
                    >
                      <td className="border border-green-600 px-4 py-2">
                        {index + 1}
                      </td>
                      <td className="border border-green-600 px-4 py-2">
                        {client.vehicleNo}
                      </td>
                      <td className="border border-green-600 px-4 py-2">
                        {client.customerName}
                      </td>
                      <td className="border border-green-600 px-4 py-2">
                        {client.paymentType}
                      </td>
                      <td className="border border-green-600 px-4 py-2">
                        <PDFDownloadLink
                          document={<Invoice client={client} />}
                          fileName={`${client.customerName}_invoice.pdf`}
                        >
                          {({ blob, url, loading, error }) => (
                            <button className="text-sm bg-green-500 p-1 rounded-md text-white hover:text-black focus:outline-none">
                              {loading
                                ? "Loading invoice..."
                                : "Download Invoice"}
                            </button>
                          )}
                        </PDFDownloadLink>
                      </td>
                      <td className="border border-green-600 px-4 py-2">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onClick={() => handleDetailsClick(client)}
                        >
                          Details
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {selectedClient && (
              <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="modal bg-white p-20 text-center rounded shadow-lg relative">
                  <button
                    className="absolute top-0 right-0 mt-2 mr-2 text-4xl font-bold text-gray-500 hover:text-gray-700 focus:outline-none"
                    onClick={handleCloseClick}
                  >
                    &times;
                  </button>
                  <h2 className="text-lg font-semibold mb-2">Client Details</h2>
                  <p>Vehicle No: {selectedClient.vehicleNo}</p>
                  <p>Customer Name: {selectedClient.customerName}</p>
                  <p>Payment Type: {selectedClient.paymentType}</p>
                  <div className="bg-rose-400 p-3 rounded-3xl mt-5 inline-block cursor-pointer">
                    <PDFDownloadLink
                      document={<Invoice client={selectedClient} />}
                      fileName={`${selectedClient.customerName}_invoice.pdf`}
                    >
                      {({ blob, url, loading, error }) => (
                        <span className="text-white">
                          {loading ? "Loading invoice..." : "Download Invoice"}
                        </span>
                      )}
                    </PDFDownloadLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Payments;
