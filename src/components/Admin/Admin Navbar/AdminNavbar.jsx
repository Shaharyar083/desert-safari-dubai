import React, { useState } from "react";
import "./adminNavbar.scss";

// import images
import profileImg from "../../../assets/images/dashboard/profile.png";
import AdminSidebar from "../Admin Sidebar/AdminSidebar";

const AdminNavbar = ({ title }) => {
  const [show, setShow] = useState(false);

  const Logout = () => {};

  return (
    <>
      <div className="admin-navbar">
        <div className="left">{title}</div>

        <div className="right">
          <div
            className="profile-wrap"
            onClick={() => {
              setShow(!show);
            }}
          >
            <div className="text-wrap">
              <div className="name">Jerome Bell</div>
              <div className="admin">Admin</div>
            </div>

            <div className="profile">
              <img src={profileImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="admin-sidebar-show-on-mobile">
        <AdminSidebar
          show={show}
          close={() => {
            setShow(false);
          }}
        />
      </div>
    </>
  );
};

export default AdminNavbar;
