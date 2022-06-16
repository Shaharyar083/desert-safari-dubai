import React, { useState, useEffect } from "react";
import "./dashboardPage.scss";
import axios from "axios";

//  components & Api
import AdminNavbar from "../Admin Navbar/AdminNavbar";
import AdminSidebar from "../Admin Sidebar/AdminSidebar";
import TableComponent from "./table";
import TourTable from "./TourTable";
import HotelTable from "./HotelTable";
import SafariTable from "./SafariTable";
import CruiseTable from "./CruiseTable";
import YachtTable from "./YachtTable";
import TicketTable from "./TicketTable";
import CarTable from "./CarTable";
import EatTable from "./EatTable";
import VisaTable from "./VisaTable";

const DashboardPage = () => {
  const [state, setState] = useState([]);

  async function fetchData() {
    let res = await axios.get("http://localhost:5000/booking/getallbookings");
    setState(res?.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="admin-pages">
      <AdminSidebar />

      <div className="admin-dashboard-page">
        <AdminNavbar title="Dashboard" />

        <TableComponent
          data={state}
          fetchData={fetchData}
        />
        <TourTable data={state} fetchData={fetchData} />
        <HotelTable data={state} fetchData={fetchData} />
        <SafariTable data={state} fetchData={fetchData} />
        <CruiseTable data={state} fetchData={fetchData} />
        <YachtTable data={state} fetchData={fetchData} />
        <TicketTable data={state} fetchData={fetchData} />
        <CarTable data={state} fetchData={fetchData} />
        <EatTable data={state} fetchData={fetchData} />
        <VisaTable data={state} fetchData={fetchData} />
      </div>
    </div>
  );
};

export default DashboardPage;
