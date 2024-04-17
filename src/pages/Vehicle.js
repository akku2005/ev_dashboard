import React, { useState } from "react";
import AdminSidebar from "../components/Dashboard/SideNavbar/AdminSidebar";
import TopNavbar from "../components/Dashboard/TopNavbar";
import bikeImg from "../assets/images/scootey1.png";
import slotData from "../data/slotData.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBatteryFull, faTachometerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft, faChevronRight, faEdit } from '@fortawesome/free-solid-svg-icons';

import availableBike from "../assets/images/scootey3.png";


const VehicleForm = () => {
  const [vehicleHealth, setVehicleHealth] = useState('');
  const [vehicleSlot, setVehicleSlot] = useState('');
  const [vehicleSpeed, setVehicleSpeed] = useState('');
  const [vehicleCondition, setVehicleCondition] = useState('');

  const handleAddVehicle = () => {
    // Add vehicle functionality here
    console.log('Adding vehicle:', {
      health: vehicleHealth,
      slot: vehicleSlot,
      speed: vehicleSpeed,
      condition: vehicleCondition,
    });
  };

  const handleRemoveVehicle = () => {
    // Remove vehicle functionality here
    console.log('Removing vehicle');
  };

  return (
    <div class="p-3 border-gray-300 rounded-md">
      <div class="flex justify-between mb-4 gap-2">
        <div class="w-1/2">
          <label for="vehicleHealth" class="block text-gray-700 font-bold mb-2">Health:</label>
          <input
            type="text"
            id="vehicleHealth"
            value={vehicleHealth}
            onChange={(e) => setVehicleHealth(e.target.value)}
            class="appearance-none border rounded w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="w-1/2">
          <label for="vehicleSlot" class="block text-gray-700 font-bold mb-2">Slot:</label>
          <input
            type="text"
            id="vehicleSlot"
            value={vehicleSlot}
            onChange={(e) => setVehicleSlot(e.target.value)}
            class="appearance-none border rounded w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div class="flex justify-between mb-4 gap-2">
        <div class="w-1/2">
          <label for="vehicleSpeed" class="block text-gray-700 font-bold mb-2">Km/h:</label>
          <input
            type="text"
            id="vehicleSpeed"
            value={vehicleSpeed}
            onChange={(e) => setVehicleSpeed(e.target.value)}
            class="appearance-none border rounded w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div class="w-1/2">
          <label for="vehicleCondition" class="block text-gray-700 font-bold mb-2">Condition:</label>
          <input
            type="text"
            id="vehicleCondition"
            value={vehicleCondition}
            onChange={(e) => setVehicleCondition(e.target.value)}
            class="appearance-none border rounded w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div class="w-full mb-2 mt-1">
        <label for="vehicleCondition" class="block text-gray-700 font-bold mb-2">UUID:</label>
        <input
          type="text"
          id="UUID"
          value={vehicleCondition}
          onChange={(e) => setVehicleCondition(e.target.value)}
          class="appearance-none border rounded w-full py-1 px-2 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div class="flex justify-end text-sm ">
        <button onClick={handleRemoveVehicle} class="bg-lime-500 hover:bg-lime-700 text-white font-semibold p-1  rounded focus:outline-none focus:shadow-outline">Remove Vehicle</button>
        <button onClick={handleAddVehicle} class="bg-red-500 hover:bg-red-700 text-white font-semibold p-1  rounded focus:outline-none focus:shadow-outline ml-4">Add Vehicle</button>
      </div>
    </div>
  );
};

class Vehicle extends React.Component {
  render() {
    return (
      <div>
        <div className="admin-container">
          <AdminSidebar />
          <main className="dashboard">
            <div className="bar">
              <TopNavbar />
            </div>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mr-5 mb-5">
              <div className="lg:col-span-1">
                <div className="bg-lime-500 p-4 mb-2 rounded-3xl">
                  <div className="bg-lime-500 p-4 mb-2 rounded-3xl">
                    <div className="bg-lime-500 p-4 mb-2 rounded-3xl">
                      <div className="w-full h-full p-30 relative">
                        <img src={bikeImg} alt="bike-image" style={{ width: "90%", height: "auto" }} />
                        <span className="inline-block w-full text-center mt-3">UUID-6245</span>
                        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                          <div className="bg-gray-300 p-2 rounded-full shadow-xl">
                            <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full">
                              <FontAwesomeIcon icon={faChevronLeft} size="1x" className="text-gray-500 cursor-pointer" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                          <div className="bg-gray-300 p-2 rounded-full shadow-xl">
                            <div className="flex items-center justify-center bg-white w-8 h-8 rounded-full">
                              <FontAwesomeIcon icon={faChevronRight} size="1x" className="text-gray-500 cursor-pointer" />
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-between mt-10 relative">
                          <div className="rounded-full w-24 h-24 flex items-center justify-center flex-col shadow-lg bg-gradient-to-t from-black to-rose-500 to-black">
                            <FontAwesomeIcon icon={faBatteryFull} size="1x" className="text-white" />
                            <div className="text-white mt-2 text-center">Health</div>
                            <div className="text-white mt-1 text-center">75%</div> {/* Replace 75% with actual battery percentage */}
                          </div>
                          <div className="bg-gradient-to-t from-black to-rose-500 to-black rounded-full w-24 h-24 flex items-center justify-center flex-col">
                            <FontAwesomeIcon icon={faTachometerAlt} size="1x" className="text-white" />
                            <div className="text-white mt-2 text-center">Speed</div>
                            <div className="text-white mt-1 text-center">60 km/h</div> {/* Replace 60 km/h with actual speed */}
                          </div>
                          <div className="bg-gradient-to-t from-black to-rose-500 to-black rounded-full w-24 h-24 flex items-center justify-center flex-col">
                            <FontAwesomeIcon icon={faPhone} size="1x" className="text-white" />
                            <div className="text-white mt-2 text-center">Contact</div>
                          </div>
                        </div>
                        <div className="text-center mt-8">
                          <button className="px-3 py-1 bg-rose-500 text-white rounded-md shadow-md hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                            Services
                          </button>
                        </div>
                        <button className="absolute bottom-0 right-0">
                          <FontAwesomeIcon icon={faEdit} size="lg" className="text-gray-300 cursor-pointer" />
                        </button>

                      </div>


                    </div>
                  </div>
                </div>
                <div className="lg:grid grid-cols-2 gap-4 p-4 rounded-3xl">
                  <div>
                    <div className="bg-gray-200 p-1 rounded-xl mb-2">
                      <div className="mt-4 overflow-hidden rounded-xl mb-2">
                        <iframe
                          title="Map Location"
                          width="100%"
                          height="320px"
                          frameBorder="0"
                          style={{ border: 0 }}
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156912.2357907997!2d-0.24168194421812243!3d51.5287718416805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876035d04a623ab%3A0xa0c0c5d5fe3e1f68!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1649926626980!5m2!1sen!2suk"
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-gray-200 p-3 rounded-2xl">
                      <h2 className="text-xl font-semibold mb-2">Vehicle Add/Remove</h2>
                      <span className="block w-full border-t border-gray-300 my-3"></span>

                      <VehicleForm />
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-gray-200 p-4 rounded-3xl">
                  <div className="flex items-center justify-between">
                    <h2 className="flex items-center font-bold text-xl text-gray-700">Booking Slot</h2>
                    <div className="text-gray-500 flex items-center">
                      <span className="mr-4">Available</span>
                      <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                      <span className="mr-2 ml-4">Unavailable</span>
                      <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <hr className="flex-1 border-t-2 border-gray-400  my-6 mx-2 relative hr-blur" />
                  </div>
                  <SlotList slots={slotData.slots} />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}

class SlotList extends React.Component {
  render() {
    return (
      <ul className="list-disc list-inside">
        {Object.entries(this.props.slots).map(([slot, slots]) => {
          // Counting available slots
          const availableCount = slots.filter(s => s.available).length;

          return (
            <li key={slot} className="flex items-center mr-4">
              <div className="flex flex-col">
                <span className="text-xl font-semibold m-3 text-black">{slot}</span>
                <div className="flex items-center font-medium text-sm mb-2">
                  <span className="text-green-500 mr-2">{`${availableCount} Available`}</span>
                  <span className="text-red-500">{`${slots.length - availableCount} Unavailable`}</span>
                </div>
              </div>
              <div className="flex flex-wrap ml-auto">
                {slots.map((s, index) => (
                  <div key={s.id} className="m-1" style={{ width: "70px", height: "50px", borderRadius: "8%", backgroundColor: s.available ? 'rgb(34,197,93)' : 'rgb(203,52,78)' }}>
                    {s.available ? (
                      <img src={availableBike} alt="Bike" style={{ width: "70%", height: "70%", display: "block", margin: "auto" }} />
                    ) : null}
                  </div>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Vehicle;
