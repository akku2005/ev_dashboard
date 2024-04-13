import React, { useEffect, useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { RiDashboardFill, RiShoppingBag3Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { MdElectricBike } from "react-icons/md";
import tripIcon from "../../../assets/icons/download.png";
import companyLogo from "../../../assets/images/name192.png";
import { MdSettingsSuggest } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa6";

const AdminSidebar = () => {
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);
  const [phoneActive, setPhoneActive] = useState(window.innerWidth < 1100);

  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <div className="w-52 ">
          <Link to="/admin/dashboard">
            <img src={companyLogo} alt="company-logo" />
          </Link>
          <hr className="mt-2" />
        </div>
        <DivOne location={location} />

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

const DivOne = ({ location }) => (
  <div>
    <ul>
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        Icon={RiDashboardFill}
        location={location}
      />
      <Li
        url="/admin/customer"
        text="Customer"
        Icon={RiShoppingBag3Fill}
        location={location}
      />
      <Li
        url="/admin/payments"
        text="Payments"
        Icon={AiFillFileText}
        location={location}
      />
      <Li
        url="/admin/vehicle"
        text="Vehicle"
        Icon={MdElectricBike}
        location={location}
      />
      <Li
        url="/admin/trips" // Update URL for trips
        text="Trips"
        Icon={() => (
          <img src={tripIcon} alt="Trips" style={{ width: "20px" }} />
        )} // Use tripIcon
        location={location}
      />
      <Li
        url="/admin/captain"
        text="Captain"
        Icon={FaUserSecret}
        location={location}
      />
      <Li
        url="/admin/analytics"
        text="Analytics"
        Icon={MdSettingsSuggest}
        location={location}
      />
    </ul>
  </div>
);

const Li = ({ url, text, location, Icon }) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
