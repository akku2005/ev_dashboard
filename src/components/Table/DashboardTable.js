import React, { useState } from 'react';
import data from '../../data/data.json';

const CircularPagination = ({ active, setActive }) => {
  const next = () => {
    if (active === 5) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <button
        className={`flex items-center justify-center w-20 h-8 rounded-md border border-gray-300 ${
          active === 1 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
        onClick={prev}
        disabled={active === 1}
      >
        <h2>Previous</h2>
      </button>
      <div className="flex items-center gap-2">
        {[1, 2, 3].map((index) => (
          <button
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 ${
              active === index ? 'bg-blue-500 text-white' : 'bg-white text-gray-600 hover:bg-gray-100'
            }`}
            onClick={() => setActive(index)}
          >
            {index}
          </button>
        ))}
      </div>
      <button
        className={`flex items-center justify-center w-12 h-8 rounded-md border border-gray-300 ${
          active === 3 ? 'bg-gray-200 text-gray-500 cursor-not-allowed' : 'bg-white text-gray-600 hover:bg-gray-100'
        }`}
        onClick={next}
        disabled={active === 3}
      >
        <h2>Next</h2>
      </button>
    </div>
  );
};


const DashboardTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(4);

  const viewDetails = (customer) => {
    // Function to view details of the customer
    console.log(customer); // Example: Log customer details to console
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="eco-ride-table ">
      <table className="min-w-full divide-y divide-gray-200 rounded-xl border">
        <thead>
          <tr>
            <th colSpan="5" className="px-6 py-3 bg-black text-white text-center text-lg font-semibold rounded-t-xl">
              <h2 className="py-2 px-2 bg-black rounded-xl">Live Scooter Status</h2>
            </th>
          </tr>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              No.
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Vehicle No.
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Customer
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentItems.map((entry, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  {indexOfFirstItem + index + 1}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                  {entry.vehicleNo}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500 flex items-center">
                  <img src={entry.avatar} alt="Avatar" className="h-8 w-8 rounded-full mr-2" />
                  {entry.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
                  <div className={`inline-block item-center h-3 w-3 rounded-full ${entry.status === 'Active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className="ml-2">{entry.status}</span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                  <button
                    onClick={() => viewDetails(entry)}
                    className="text-indigo-500 hover:text-indigo-900 bg-green-400 p-1 w-20 rounded-xl"
                  >
                    Details
                  </button>
                </td>
              </tr>
              <tr>
                <td colSpan="5" className="border-t border-opacity-50"></td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="5" className="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
              <CircularPagination active={currentPage} setActive={paginate} />
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default DashboardTable;
