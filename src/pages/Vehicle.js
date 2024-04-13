import React from "react";
import AdminSidebar from "../components/Dashboard/SideNavbar/AdminSidebar";
import TopNavbar from "../components/Dashboard/TopNavbar";

const Vehicle = () => {
  return (
    <div>
      <div className="admin-container">
        <AdminSidebar />
        <main className="dashboard">
          <div className="bar">
            <TopNavbar />
          </div>
          <section></section>
        </main>
      </div>
    </div>
  );
};

export default Vehicle;
