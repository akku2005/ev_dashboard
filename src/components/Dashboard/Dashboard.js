import React from "react";
import AdminSidebar from "./SideNavbar/AdminSidebar";
import { HiTrendingUp, HiTrendingDown } from "react-icons/hi";
import "../../styles/app.scss";
import { BarChart } from "../Chats/Charts";
import Graph from "../Chats/Graph"
import TopNavbar from "./TopNavbar";
import Table from "../Table/DashboardTable";
import revenueImage1 from "../../assets/images/revenue.png";
import revenueImage2 from "../../assets/images/todayExpenses.png";
import revenueImage3 from "../../assets/images/newUser.png";
import MapLocation from "../Table/MapLocation";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />
      <main className="dashboard">
        <div className="bar">
          <TopNavbar />
        </div>
        <section className="widget-container mt-8">
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Today’s income"
            image={revenueImage1}
          />
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Today’s expance"
            image={revenueImage2}
          />
          <Link to="/admin/customer">
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Today’s new use"
            image={revenueImage3}
          />
          </Link>
        </section>
        <section className="graph-container">
          <div className="revenue-chart">
            <h2>Revenue & Transaction</h2>
            {/* Grapph here */}
            <BarChart
              data_2={[300, 144, 433, 655, 237, 755, 190]}
              data_1={[200, 444, 343, 556, 778, 455, 990]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgba(53,162,235,0.8)"
            />
            <div>
              <h1>Today’s Active Users</h1>
              <p>(+23) than last week</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-xl p-4">
                  
                </div>
                <div className="bg-white rounded-lg shadow-xl p-4">
                  
                </div>
                <div className="bg-white rounded-lg shadow-xl p-4">
                  
                </div>
                <div className="bg-white rounded-lg shadow-xl p-4">
                  
                </div>
              </div>
            </div>
          </div>
          <div className="text-black">
            <Graph/>
          </div>
        </section>
        <section className="transaction-container">
        
        <Table/>
        <MapLocation/>
        <div className="gender-chart">
           
        </div>

        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  amount?: boolean;
  image: string; // Add the image prop
}

const WidgetItem = ({
  heading,
  value,
  percent,
  amount = false,
  image,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widget-info">
      <p>{heading}</p>
      <h4>{amount ? `$${value}` : value}</h4>
      {percent > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percent}%{" "}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percent}%{" "}
        </span>
      )}
    </div>
    <div className="widget-image w-16 ">
      <img src={image} alt={heading} />
    </div>
  </article>
);

export default Dashboard;
