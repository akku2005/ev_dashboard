import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/Dashboard/SideNavbar/AdminSidebar";
import TopNavbar from "../components/Dashboard/TopNavbar";
import data from "../data/customerDetails.json";
import waitListData from "../data/customerWaitList.json";
import { Link } from "react-router-dom";

const WidgetItem = ({ heading, value, profitLoss, image }) => {
  return (
    <div className="widget-item flex items-center justify-between border p-3 rounded-xl shadow-md gap-9">
      <div>
        <h3 className="text-lg font-semibold">{heading}</h3>
        <div className="flex items-center">
          <p className="text-gray-500 mr-2">{value}</p>
          <p
            className={`text-sm inline-block ${
              profitLoss >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {profitLoss >= 0 ? `+${profitLoss}%` : `${profitLoss}%`}
          </p>
        </div>
      </div>
      <div className="flex items-center">
        <img className="ml-4" src={image} alt={heading} />
      </div>
    </div>
  );
};

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [waitListCustomers, setWaitListCustomers] = useState([]);

  useEffect(() => {
    // Fetch or import the customer data
    setCustomers(data); // Set customers data from imported data.json
    setWaitListCustomers(waitListData); // Set wait list customers data from imported customerWaitList.json
  }, []);

  const handleAccept = (customer) => {
    // Handle the accept button click event
    console.log(`Accepted: ${customer.customerName}`);
  };

  return (
    <div className="admin-container flex">
      <AdminSidebar />
      <main className="dashboard flex flex-col flex-1">
        <div className="bar">
          <TopNavbar />
        </div>
        <section className="flex gap-6 mt-6 ml-5 ">
          <div className="left-box flex-1">
            <div className="flex flex-wrap gap-6">
              <WidgetItem
                heading="Online Customers"
                value={customers.length}
                profitLoss={5}
                image="/path/to/label1.jpg"
              />
              <WidgetItem
                heading="Active Customers"
                value={
                  customers.filter((customer) => customer.status === "Active")
                    .length
                }
                profitLoss={-10}
                image="/path/to/label2.jpg"
              />
              <WidgetItem
                heading="Inactive Customers"
                value={
                  customers.filter((customer) => customer.status === "Inactive")
                    .length
                }
                profitLoss={20}
                image="/path/to/label3.jpg"
              />
            </div>
          </div>
        </section>
        <section className="grid grid-cols-2 mt-5 gap-4">
          <div className="col-span-1">
            <DashboardTable />
          </div>
          <div className="col-span-1 text-center mr-5">
            <h2 className="text-lg font-semibold mb-4">Wait List Customers</h2>
            <div className="rounded-xl overflow-hidden border mb-2">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="px-2 py-3 text-xs font-medium text-gray-800 uppercase tracking-wider">
                      No.
                    </th>
                    <th className="px-2 py-3 text-xs font-medium text-gray-800 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-2 py-3 text-xs font-medium text-gray-800 uppercase tracking-wider"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {waitListCustomers.map((customer, index) => (
                    <tr
                      key={index}
                      className={
                        index % 2 === 0
                          ? "bg-gray-100 hover:bg-gray-200"
                          : "hover:bg-gray-200"
                      }
                    >
                      <td className="px-2 py-2 whitespace-no-wrap text-sm text-gray-800">
                        {customer.srNo}
                      </td>
                      <td className="px-2 py-2 whitespace-no-wrap text-sm text-gray-800">
                        {customer.customerName}
                      </td>
                      <td className="px-2 py-2 whitespace-no-wrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleAccept(customer)}
                          className="text-indigo-500 hover:text-indigo-900 bg-green-400 p-1 rounded-md hover:bg-green-500 transition duration-300"
                        >
                          Accept
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const DashboardTable = () => {
  const [currentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  const viewDetails = (customer) => {
    console.log(customer); 
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // const  = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="eco-ride-table">
      <table className="min-w-full divide-y divide-gray-200 rounded-xl border mb-2">
        <thead>
          <tr>
            <th
              colSpan="5"
              className="px-1 py-1 text-white text-start text-lg font-semibold rounded-t-xl bg-gray-300"
            >
              <div className="flex items-center justify-between">
                <h2 className="py-1 px-1 rounded-xl text-gray-700">
                  Live Scooter Status
                </h2>
                <div className="flex items-center mr-4 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
                    />
                  </svg>
                  Filter
                </div>
              </div>
            </th>
          </tr>
          <tr>
            <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
              No.
            </th>
            <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
              Vehicle No.
            </th>
            <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 bg-gray-200 text-left text-xs leading-4 font-medium text-gray-800 uppercase tracking-wider">
              Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentItems.map((entry, index) => (
            <React.Fragment key={index}>
              <tr className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-800 font-medium">
                  {indexOfFirstItem + index + 1}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-800 font-medium">
                  {entry.vehicleNo}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-800 flex items-center">
                  <img
                    src={entry.avatar}
                    alt="Avatar"
                    className="h-8 w-8 rounded-full mr-2"
                  />
                  {entry.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
                  <div
                    className={`inline-block h-3 w-3 rounded-full ${
                      entry.status === "Active" ? "bg-green-500" : "bg-red-500"
                    }`}
                  ></div>
                  <span className="ml-2">{entry.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <Link to="/admin/user-details">
                    <button
                      onClick={() => viewDetails(entry)}
                      className="text-indigo-500 hover:text-indigo-900 bg-green-400 p-1 w-20 rounded-xl"
                    >
                      Details
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td colSpan="5" className="border-t border-opacity-50"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
