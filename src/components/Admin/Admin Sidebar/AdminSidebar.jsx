import React, { useState, useEffect } from "react";
import "./adminSidebar.scss";

// import icons
import { ImCross } from "react-icons/im";

// import packages
import { useLocation, Link } from "react-router-dom";
import { Offcanvas } from "react-bootstrap";

// import images
import logo from "../../../assets/images/dashboard/logo.png";
import icon1 from "../../../assets/images/dashboard/icon1.png";
import icon1Active from "../../../assets/images/dashboard/icon1Active.png";

// Helper array
const tabArray = [
  {
    icon: icon1,
    activeIcon: icon1Active,
    label: "Dashboard",
    route: "/admin/dashboard",
  },
];

const Tab = ({ icon, activeIcon, label, route, location }) => {
  return (
    <Link
      to={route}
      className={route === location ? "tab-wrap active" : "tab-wrap"}
    >
      <img src={route === location ? activeIcon : icon} alt="" />
      <div className="label">{label}</div>
    </Link>
  );
};

const AdminSidebar = ({ show, close }) => {
  const location = useLocation();

  const [width, setWidth] = useState(false);

  const Logout = () => {};

  useEffect(() => {
    if (window.innerWidth < 991) {
      setWidth(true);
    }
  }, []);

  return (
    <>
      <div className="admin-sidebar">
        <div className="top">
          <div className="logo">
            {/* <img src={logo} alt="" /> */}
            DSD
          </div>

          {tabArray.map((data, i) => (
            <Tab
              icon={data.icon}
              activeIcon={data.activeIcon}
              label={data.label}
              route={data.route}
              location={location.pathname}
              key={i}
            />
          ))}
        </div>

        <div className="bottom">
          <div className="logout-btn" onClick={Logout}>
            Logout{" "}
          </div>
        </div>
      </div>

      <Offcanvas
        show={width && show}
        onHide={close}
        className="admin-mobile-sidebar"
        placement="start"
      >
        <div className="top">
          <img src={logo} alt="" />

          <ImCross className="cancel" onClick={close} />
        </div>

        {tabArray.map((data, i) => (
          <Tab
            icon={data.icon}
            activeIcon={data.activeIcon}
            label={data.label}
            route={data.route}
            location={location.pathname}
            key={i}
          />
        ))}

        <div className="logout-btn" onClick={Logout}>
          Logout{" "}
        </div>
      </Offcanvas>
    </>
  );
};

export default AdminSidebar;
