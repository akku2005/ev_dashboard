import React from "react";
import AdminSidebar from "../components/Dashboard/SideNavbar/AdminSidebar";
import TopNavbar from "../components/Dashboard/TopNavbar";
import bikeImg from "../assets/images/scootey1.png";

const Vehicle = () => {
  return (
    <div>
      <div className="admin-container">
        <AdminSidebar />
        <main className="dashboard">
          <div className="bar">
            <TopNavbar />
          </div>
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mr-5">
            <div>
              <div className="bg-lime-500 p-4 mb-2">
                {/* Adjusted padding for larger image */}
                <div className="w-full h-full p-20">
                  <img src={bikeImg} alt="bike-image" style={{ width: "100%", height: "auto" }} />
                  <div className="bg-red-500 rounded-full w-24 h-24 flex items-center justify-center">
                    <div className="text-white">Akash</div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-gray-200 p-4">Left</div>
                <div className="bg-gray-200 p-4">Right</div>
              </div>
            </div>
            <div className="bg-gray-200 p-4">Sahu</div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Vehicle;
