import React from "react";

const Invoice = ({ client }) => {
  return (
    <div className="invoice">
      <h2>Invoice</h2>
      <div>
        <strong>Customer Name:</strong> {client.customerName}
      </div>
      <div>
        <strong>Vehicle No:</strong> {client.vehicleNo}
      </div>
      <div>
        <strong>Payment Type:</strong> {client.paymentType}
      </div>
      <div>
        <strong>Amount:</strong> {/* Add amount data if available */}
      </div>
      {/* Add more invoice details as needed */}
    </div>
  );
};

export default Invoice;
