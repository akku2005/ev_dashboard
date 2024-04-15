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
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mr-5 mb-5">
            <div>
              <div className="bg-lime-500 p-4 mb-2 rounded-3xl">
                {/* Adjusted padding for larger image */}
                <div className="w-full h-full p-20">
                  <img src={bikeImg} alt="bike-image" style={{ width: "100%", height: "auto" }} />
                  <div className="flex justify-between mt-6">
                    <div className="rounded-full w-24 h-24 flex items-center justify-center shadow-lg bg-gradient-to-t from-black to-rose-500 to-black">
                      <div className="text-white">Akash</div>
                    </div>

                    <div className="bg-gradient-to-t from-black to-rose-500 to-black rounded-full w-24 h-24 flex items-center justify-center">
                      <div className="text-white">Akash</div>
                    </div>
                    <div className="bg-gradient-to-t from-black to-rose-500 to-black rounded-full w-24 h-24 flex items-center justify-center">
                      <div className="text-white">Akash</div>
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                      Services
                    </button>
                  </div>

                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-gray-200 p-1">
                  <iframe
                    title="Map"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.5370571904695!2d-73.99228568459474!3d40.73061010694133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25902bcfe94c3%3A0x292aae06eddd2eb!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1614659772463!5m2!1sen!2sus"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="bg-gray-200 p-4">
                  <h2 className="text-xl font-bold mb-4">Vehicle Add or Remove</h2>

                  <div className="flex mb-4">
                    <input type="text" className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter vehicle name" />
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Add</button>
                  </div>

                  <div className="flex">
                    <input type="text" className="w-full px-3 py-2 mr-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter vehicle name to remove" />
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">Remove</button>
                  </div>
                </div>

              </div>
            </div>
            <div className="bg-gray-200 p-4 rounded-3xl">
              <h2 className="text-xl font-bold mb-4">Booking Slot</h2>

              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-1">
                  <ul>
                    {/* Render slots from A to Z */}
                    {Array.from({ length: 26 }, (_, index) => (
                      <li key={index}>{String.fromCharCode(65 + index)}</li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-4">
                  {/* Render availability boxes for each slot */}
                  {Array.from({ length: 26 }, (_, index) => (
                    <div key={index} className="bg-white p-4 rounded-md shadow-md">
                      <h3 className="font-semibold mb-2">Slot {String.fromCharCode(65 + index)}</h3>
                      <div className="flex flex-col">
                        <div className="flex items-center mb-2">
                          <div className="w-4 h-4 bg-green-500 mr-2"></div>
                          <span className="text-sm">Available</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <div className="w-4 h-4 bg-red-500 mr-2"></div>
                          <span className="text-sm">Not Available</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-4 h-4 bg-yellow-500 mr-2"></div>
                          <span className="text-sm">Reserved</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </section>
        </main>
      </div>
    </div>
  );
};

export default Vehicle;
