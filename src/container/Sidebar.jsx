import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/Sidebar.scss";

export default function Sidebar() {
  return (
    <div className=" open d-none d-sm-none d-md-block">
      {" "}
      {/* <div style={{ width: 240, backgroundColor: "aliceblue",position:"fixed",top:"1" }}> */}
      <div className="sidebarcontent open pt-2">
        <div>
          <div>
            <NavLink to="/step-1" className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}>
              Loan Details
            </NavLink>
          </div>
          <div>
            <NavLink to="/step-3" className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}>
              Personal Information
            </NavLink>
          </div>
          <div>
            <NavLink to="/asset" className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}>
              Assets
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/employement-and-income-details"
              className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}
            >
              Employment and Income
            </NavLink>
          </div>
          <div>
            <NavLink to="/liabilities" className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}>
              Liabilities
            </NavLink>
          </div>
          <div>
            <NavLink to="/declaration" className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}>
              Declarations
            </NavLink>
          </div>
          <div>
            <NavLink to="/summary" className={(navData) => (navData.isActive ? "main-nav-active-style" : "")}>
              Summary
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

// height:100vh
