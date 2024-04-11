import React from "react";

const Invoice = ({ client }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-6">
      <h2 className="text-2xl font-semibold mb-4">Invoice</h2>
      <div className="mb-2">
        <strong className="font-semibold">Customer Name:</strong>{" "}
        {client.customerName}
      </div>
      <div className="mb-2">
        <strong className="font-semibold">Vehicle No:</strong>{" "}
        {client.vehicleNo}
      </div>
      <div className="mb-2">
        <strong className="font-semibold">Payment Type:</strong>{" "}
        {client.paymentType}
      </div>
      <div className="mb-2">
        <strong className="font-semibold">Amount:</strong>{" "}
        {/* Add amount data if available */}
      </div>
      {/* Add more invoice details as needed */}
    </div>
  );
};

export default Invoice;
