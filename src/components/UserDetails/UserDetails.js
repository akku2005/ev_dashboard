import React, { useState } from "react";
import AdminSidebar from "../Dashboard/SideNavbar/AdminSidebar";
// import TopNavbar from "../Dashboard/TopNavbar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../../styles/app.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import scooter1 from "../../assets/images/scootey2.png";
import scooter2 from "../../assets/images/scootey3.png";
import scooter3 from "../../assets/images/scootey1.png";
import { FaUser, FaUserTie } from "react-icons/fa";
import rentBike from "../../assets/images/scootey1.png";

const ClientBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="client-booking">
      <h2 className="text-gray-800 font-semibold font-sans text-2xl">
        Client Booking
      </h2>
      <div className="mt-4">
        <label className="block text-gray-700 font-bold mb-2">
          Select Date:
        </label>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MMMM d, yyyy"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
};

const UserDetails = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="admin-container flex">
      <AdminSidebar />
      <main className="dashboard flex flex-col flex-1">
        {/* <div className="bar">
          <TopNavbar />
        </div> */}
        <section className="grid grid-cols-1 md:grid-cols-3 mt-5 gap-5 overflow-auto m-2 p-3 ">
          <div className="ride-details">
            <div className="bg-gray-200 p-7 rounded-md flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  className="h-16 w-16 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                <div className="ml-9">
                  <h2 className="text-gray-800 font-semibold font-sans text-2xl">
                    Akash Sahu
                  </h2>
                  <div className="mt-1">
                    <button className="bg-lime-500 p-2 font-semibold text-white rounded-lg w-full hover:bg-lime-400 hover:text-black">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 mt-5 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 m-2">
                <div className="bg-gray-200 rounded-lg p-4">
                  <div className="grid grid-cols-1 md:grid-rows-2 gap-4 items-center">
                    <div>
                      <h2>Ride Details</h2>
                      <img
                        src={rentBike}
                        alt="Bike"
                        className="w-48 h-auto mt-4"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        Charges per Hour
                      </h3>
                      <ul className="text-sm">
                        <li>1-2 Hours: $10</li>
                        <li>3-4 Hours: $15</li>
                        <li>5+ Hours: $20</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="aspect-w-16 aspect-h-9 rounded-xl p-2">
                  <iframe
                    title="Google Maps Location"
                    className="w-full h-full rounded-lg"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31038.276781352716!2d-122.41942486778864!3d37.77492958866373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1648503617992!5m2!1sen!2sus"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Distance
                    </th>
                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Speed
                    </th>
                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Rate
                    </th>
                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Fine
                    </th>
                    <th className="px-6 py-3 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      100 km
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      50 km/h
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      $10 per hour
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      $20
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
                      <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
                      <span className="ml-2">Active</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      50 km
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      30 km/h
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      $8 per hour
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-500">
                      $15
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
                      <span className="inline-block h-3 w-3 rounded-full bg-red-500"></span>
                      <span className="ml-2">Inactive</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="user-details-section">
            <div className="bg-lime-500 p-7 rounded-md  flex-col items-center justify-center h-fit">
              <h2 className="text-gray-800 font-semibold font-sans text-2xl mb-4">
                Ride Details
              </h2>
              <Slider {...settings}>
                <div>
                  <img src={scooter1} alt="Scooter 1" className="w-full h-64" />
                </div>
                <div>
                  <img src={scooter2} alt="Scooter 2" className="w-full h-64" />
                </div>
                <div>
                  <img src={scooter3} alt="Scooter 3" className="w-full h-64" />
                </div>
              </Slider>
              <div className="flex justify-between w-full mt-4">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  Previous
                </button>
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                  Next
                </button>
              </div>
              <div className="mt-4 p-8 bg-gray-200 w-full  rounded-3xl shadow-lg shadow-black">
                <div className="text-center">
                  <h3 className="text-lg font-semibold mb-2">
                    Scooter Details
                  </h3>
                  <ul className="text-sm">
                    <li>Mileage: 50 km/l</li>
                    <li>Top Speed: 60 km/h</li>
                    <li>Brake: Disc</li>
                    <li>Color: Black</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="client-booking grid grid-rows-2">
            <div>
              <ClientBooking />
            </div>
            <div className="chat-box p-4 border rounded-lg">
              {/* Previous messages */}
              <div className="flex justify-start items-center mb-4">
                <FaUserTie className="text-blue-500 mr-2" />
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Hello! How can we assist you today?
                  </p>
                </div>
              </div>
              <div className="flex justify-end items-center mb-4">
                <div className="bg-gray-200 p-3 rounded-lg">
                  <p className="text-sm text-gray-700">
                    I have a question about my booking.
                  </p>
                </div>
                <FaUser className="text-gray-500 ml-2" />
              </div>
              <div className="flex justify-start items-center">
                <FaUserTie className="text-blue-500 mr-2" />
                <div className="bg-blue-100 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    Sure, feel free to ask. How can I help you?
                  </p>
                </div>
              </div>

              {/* Input box and send button */}
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  placeholder="Type your message here..."
                  className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring focus:border-blue-500"
                />
                <button className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default UserDetails;
